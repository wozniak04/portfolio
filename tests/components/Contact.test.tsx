import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Contact } from '../../src/components/Contact';
import { LanguageProvider } from '../../src/context/LanguageContext';

describe('Contact Component', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });
  });

  afterEach(() => {
    vi.useRealTimers();
    vi.restoreAllMocks();
  });

  function renderContact() {
    return render(
      <LanguageProvider>
        <Contact />
      </LanguageProvider>
    );
  }

  it('renders contact title and details', () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      } as Response)
    );

    renderContact();

    expect(
      screen.getByRole('heading', {
        name: /Porozmawiajmy o współpracy|Let's Discuss Opportunities/i,
        level: 2,
      })
    ).toBeInTheDocument();
    expect(screen.getByText('mikimen321@gmail.com')).toBeInTheDocument();
  });

  it('allows copying email address to clipboard and shows toast notification', () => {
    renderContact();

    const copyBtn = screen.getByRole('button', { name: /Kopiuj email/i });
    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('mikimen321@gmail.com');
    expect(
      screen.getByText(/Adres e-mail skopiowany do schowka!|Email address copied to clipboard!/i)
    ).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3500);
    });

    expect(
      screen.queryByText(/Adres e-mail skopiowany do schowka!|Email address copied to clipboard!/i)
    ).not.toBeInTheDocument();
  });

  it('handles form inputs and Web3Forms API submission successfully', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true }),
      } as Response)
    );

    renderContact();

    const nameInput = screen.getByLabelText(/Twoje Imię \/ Firma|Your Name \/ Company/i);
    const emailInput = screen.getByLabelText(/Adres E-mail|Email Address/i);
    const messageInput = screen.getByLabelText(/Wiadomość|Message/i);
    const submitBtn = screen.getByRole('button', { name: /Wyślij wiadomość|Send Message/i });

    fireEvent.change(nameInput, { target: { value: 'Jan Kowalski' } });
    fireEvent.change(emailInput, { target: { value: 'jan@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Dzień dobry, chciałbym porozmawiać o projekcie.' },
    });

    await act(async () => {
      fireEvent.click(submitBtn);
    });

    expect(
      screen.getByText(/Dziękuję za wiadomość!|Thank you for your message!/i)
    ).toBeInTheDocument();
  });

  it('handles API error response and network exception gracefully', async () => {
    vi.spyOn(globalThis, 'fetch').mockImplementation(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ success: false }),
      } as Response)
    );

    renderContact();

    const nameInput = screen.getByLabelText(/Twoje Imię \/ Firma|Your Name \/ Company/i);
    const emailInput = screen.getByLabelText(/Adres E-mail|Email Address/i);
    const messageInput = screen.getByLabelText(/Wiadomość|Message/i);
    const submitBtn = screen.getByRole('button', { name: /Wyślij wiadomość|Send Message/i });

    fireEvent.change(nameInput, { target: { value: 'Jan Kowalski' } });
    fireEvent.change(emailInput, { target: { value: 'jan@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Dzień dobry' } });

    await act(async () => {
      fireEvent.click(submitBtn);
    });

    expect(
      screen.getByText(/Dziękuję za wiadomość!|Thank you for your message!/i)
    ).toBeInTheDocument();
  });

  it('handles fetch network rejection error gracefully', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('Network error'));

    renderContact();

    const nameInput = screen.getByLabelText(/Twoje Imię \/ Firma|Your Name \/ Company/i);
    const emailInput = screen.getByLabelText(/Adres E-mail|Email Address/i);
    const messageInput = screen.getByLabelText(/Wiadomość|Message/i);
    const submitBtn = screen.getByRole('button', { name: /Wyślij wiadomość|Send Message/i });

    fireEvent.change(nameInput, { target: { value: 'Jan Kowalski' } });
    fireEvent.change(emailInput, { target: { value: 'jan@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Dzień dobry' } });

    await act(async () => {
      fireEvent.click(submitBtn);
    });

    expect(
      screen.getByText(/Dziękuję za wiadomość!|Thank you for your message!/i)
    ).toBeInTheDocument();
  });

  it('does not submit if form fields are empty', () => {
    renderContact();

    const submitBtn = screen.getByRole('button', { name: /Wyślij wiadomość|Send Message/i });
    fireEvent.click(submitBtn);

    expect(
      screen.queryByText(/Dziękuję za wiadomość!|Thank you for your message!/i)
    ).not.toBeInTheDocument();
  });
});
