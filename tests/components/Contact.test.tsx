import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { Contact } from '../../src/components/Contact';

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
  });

  it('renders contact title and details', () => {
    render(<Contact />);

    expect(
      screen.getByRole('heading', { name: 'Porozmawiajmy o współpracy', level: 2 })
    ).toBeInTheDocument();
    expect(screen.getByText('mikimen321@gmail.com')).toBeInTheDocument();
  });

  it('allows copying email address to clipboard and shows toast notification', () => {
    render(<Contact />);

    const copyBtn = screen.getByRole('button', { name: /Kopiuj email/i });
    fireEvent.click(copyBtn);

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('mikimen321@gmail.com');
    expect(screen.getByText('Adres e-mail skopiowany do schowka!')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(3500);
    });

    expect(screen.queryByText('Adres e-mail skopiowany do schowka!')).not.toBeInTheDocument();
  });

  it('handles form inputs and submission successfully', () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText(/Twoje Imię \/ Firma/i);
    const emailInput = screen.getByLabelText(/Adres E-mail/i);
    const messageInput = screen.getByLabelText(/Wiadomość/i);
    const submitBtn = screen.getByRole('button', { name: /Wyślij wiadomość/i });

    fireEvent.change(nameInput, { target: { value: 'Jan Kowalski' } });
    fireEvent.change(emailInput, { target: { value: 'jan@example.com' } });
    fireEvent.change(messageInput, {
      target: { value: 'Dzień dobry, chciałbym porozmawiać o projekcie.' },
    });

    fireEvent.click(submitBtn);

    expect(screen.getByText('Dziękuję za wiadomość!')).toBeInTheDocument();

    act(() => {
      vi.advanceTimersByTime(4500);
    });

    expect(screen.getByRole('button', { name: /Wyślij wiadomość/i })).toBeInTheDocument();
  });

  it('does not submit if form fields are empty', () => {
    render(<Contact />);

    const submitBtn = screen.getByRole('button', { name: /Wyślij wiadomość/i });
    fireEvent.click(submitBtn);

    expect(screen.queryByText('Dziękuję za wiadomość!')).not.toBeInTheDocument();
  });
});
