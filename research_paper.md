# Predicting AI Referral Opportunities: A Machine Learning Approach to Optimizing Content for LLM Search Assistants

## Abstract

As conversational AI search tools (such as ChatGPT, Perplexity, and Claude) increasingly synthesize answers directly for users, web publishers face uncertainty regarding which content items successfully capture AI referral traffic. In this research, we evaluate 30,000 anonymized content items across 32 enterprise client domains from the FlyRank benchmark panel to determine what observable search and structural metrics predict Retrieval-Augmented Generation (RAG) citations. Using an honest 5-fold client-grouped validation split (`GroupKFold` by `client_id`), we train a Random Forest ranking model that achieves an out-of-fold **Precision@50 of 68.00%**, outperforming a heuristic baseline rule (32.00%) by +36.00% (a 2.125× improvement) over a naive 6.43% base rate. We further demonstrate that random train-test splitting introduces a **20.00% memorization gap** by leaking domain-level authority traits across folds. These findings serve as a decision-support framework and content action playbook for SEO strategists prioritizing editorial updates for AI referral acquisition.

---

## 1. Introduction & Problem Statement

Traditional Search Engine Optimization (SEO) has historically focused on driving click-through traffic from blue links on Search Engine Results Pages (SERPs). However, the rapid emergence of LLM-driven search engines and RAG architectures fundamentally alters user discovery. AI search assistants summarize information directly and provide footnoted citations back to source documents.

For content teams and publishing managers, a critical strategic question arises: _How should editorial resources be allocated to optimize existing content for AI referral visibility?_

Because manual content audits are expensive and subjective, publishing teams require an objective, data-driven ranking tool to score relative opportunity. Rather than attempting to predict black-box LLM algorithms, this study frames AI referral acquisition as a **decision-support ranking problem**, evaluating which observable organic search visibility signals and content attributes indicate high potential for AI referral traffic.

---

## 2. Data & Privacy

This study utilizes the FlyRank internship panel dataset (`data/raw/content_refresh_anonymized.csv`), comprising **30,000 pseudonymized content items** across **32 client domains** evaluated over a 90-day performance snapshot window.

### Dataset Composition & Base Rate

- **Total Evaluated Pages:** 30,000 active content items (`impressions_90d > 0`).
- **Target Label (`is_positive`):** Binary indicator equal to 1 if `ai_sessions_90d > 0`, and 0 otherwise.
- **Positive Class Base Rate:** Exactly **1,930 pages** recorded >0 AI referral sessions, yielding a sparse positive base rate of **6.43%**.

### Public-Safety & Privacy Safeguards

To comply with strict privacy standards, all client identifiers (`client_id`), content keys (`content_id`), and raw query strings were pseudonymized. Rate columns (such as `ctr`) are scaled percentages.

### Feature Selection & Exclusions

- **Included Features:** 5 numeric search/structural metrics (`impressions_90d`, `word_count`, `avg_position`, `ctr`, `days_with_impressions`) plus One-Hot Encoded `content_type` categories.
- **Excluded Leaky Columns:** Target-derived and future-window metrics (`ai_traffic_pct`, `trend_direction`, `trend_pct`, `impressions_last_30d`, `sessions_last_30d`) were strictly excluded to prevent label leakage.

---

## 3. Methodology & Validation Design

### Baseline Score Reconstruction

To establish a realistic benchmark to beat, we reconstructed a rule-based heuristic score reflecting standard industry practices:
$$\text{Baseline Score} = \text{impressions\_90d} \times (1 + 0.5 \times \mathbb{I}_{\text{article}}) \times (1 + 0.5 \times \mathbb{I}_{\text{top\_10}})$$
Where $\mathbb{I}_{\text{article}}$ flags informational content (`keyword article` or `feedly article`), and $\mathbb{I}_{\text{top\_10}}$ flags pages ranking in Google positions 1 through 10.

### Honest Validation Design (`GroupKFold`)

Standard random train-test splits suffer from severe entity leakage: pages from the same client domain appear in both training and testing folds. The model learns to "memorize" domain authority traits rather than generalizable SEO patterns.

To enforce honest validation, we implemented **5-Fold `GroupKFold` grouped strictly by `client_id`**. Every fold evaluates the model exclusively on client domains it has never seen during training.

### Model Specification

We trained a `RandomForestClassifier` (100 estimators, maximum depth of 6) out-of-fold. The evaluation metric is **Precision@50** (the proportion of true positive AI referral pages within the top 50 model recommendations), matching the operational capacity of an editorial review team.

### Leakage Audit & Attack Experiment

We audited the feature pipeline using an "Attack-Your-Own-Model" experiment. Deliberately injecting `ai_traffic_pct` (a label-derived column) caused Precision@50 to jump to an artificial **100.00%**. Removing the leaky feature restored the honest 68.00% evaluation score, confirming pipeline integrity.

---

## 4. Results & Performance Benchmarks

### Out-of-Fold Performance Comparison

The Random Forest model under `GroupKFold` achieved **68.00% Precision@50**, outperforming the rule-based baseline by +36.00 percentage points (a 2.125× improvement).

| Strategy / Model                   | Validation Split              | Precision@50 | Lift over Base Rate              |
| ---------------------------------- | ----------------------------- | ------------ | -------------------------------- |
| Naïve Base Rate (Random Selection) | —                             | 6.43%        | 1.00×                            |
| Rule-Based Baseline (W04)          | Heuristic Rule                | 32.00%       | 4.98×                            |
| **Honest Random Forest (W05/W07)** | **GroupKFold by `client_id`** | **68.00%**   | **10.58× (+36.00% vs Baseline)** |
| Naïve Random Split Model           | Random 5-Fold KFold           | 88.00%       | 13.69× (Overfitted / Leaked)     |

### Quantifying the Memorization Gap

Comparing the Naïve Random Split (88.00%) to the Honest Grouped Split (68.00%) reveals a **20.00% Memorization Gap**. This gap measures the exact degree to which standard cross-validation overestimates model skill by allowing algorithms to memorize domain-level authority.

### Feature Importance Analysis

Out-of-fold feature importances demonstrate that the model relies primarily on two key drivers:

1. **Organic Search Impressions (`impressions_90d`):** 33.95% relative importance.
2. **Content Word Count (`word_count`):** 31.11% relative importance.
3. **Click-Through Rate (`ctr`):** 11.46% relative importance.
4. **Days with Impressions (`days_with_impressions`):** 9.71% relative importance.
5. **Average Position (`avg_position`):** 9.70% relative importance.

---

## 5. Limitations & Honest Framing

To maintain scientific credibility, the findings of this paper must be interpreted within the following explicit boundaries:

1. **Correlational, Non-Causal Framing:** This study measures observed associations in historical panel data. It does NOT prove that increasing word count or impressions will causally cause LLM crawlers to cite a page.
2. **Scope Boundary:** Valid strictly for informational articles (`keyword article`, `feedly article`). It is NOT valid for e-commerce transactional landing pages.
3. **Black-Box Limitation:** The model does NOT claim to decode or predict the proprietary internal algorithms of Google Search or OpenAI.
4. **Decision-Support Context:** Scores represent relative editorial opportunity for human review queues, not guaranteed citation placement.

---

## 6. Ranked Recommendations (Content Action Playbook)

To operationalize model predictions, we map out-of-fold probability scores to actionable reason codes for editorial teams:

```python
def assign_reason_code(row):
    imp = row['impressions_90d']
    pos = row['avg_position']
    ctype = row['content_type']
    is_article = ctype in ['keyword article', 'feedly article']

    if imp >= 1000 and 0 < pos <= 10 and is_article:
        return 'high_volume_top_rank_article'
    elif imp >= 1000 and is_article:
        return 'high_volume_article'
    elif 0 < pos <= 10 and is_article:
        return 'top_rank_striking_distance'
    else:
        return 'moderate_search_presence'
```

### Action Playbook Human Review Rules

- **Human Review Checklist:** Editors must verify query intent (filtering out brand navigational queries), audit factual accuracy, and optimize H2/H3 question headers for RAG extractability.
- **The No-Go Automations List:**
  1. _NO automated AI text generation/publishing_ without human editor review.
  2. _NO automated page deletions or redirects_ based solely on low scores.
  3. _NO manipulative prompt injection_ or keyword stuffing targeting LLM crawlers.

---

## 7. Reproducibility & Open Code

All code, notebooks, and dataset processing scripts are version-controlled and fully reproducible.

- **GitHub Repository:** [FlyRank Portfolio Repository](https://github.com/wozniak04/ml-starter)
- **Capstone Notebook:** [`work/notebooks/capstone.ipynb`](../work/notebooks/capstone.ipynb)
- **Validation Audit Notebook:** [`work/notebooks/w06_validation_audit.ipynb`](../work/notebooks/w06_validation_audit.ipynb)
- **Action Playbook Notebook:** [`work/notebooks/w07_action_playbook.ipynb`](../work/notebooks/w07_action_playbook.ipynb)
- **Exported Metric Receipts:** [`work/outputs/metrics_summary.json`](../work/outputs/metrics_summary.json)

---

## 8. Acknowledgments & Data Credit

Built on the **[FlyRank ML Internship dataset](https://flyrank.ai)**. We gratefully acknowledge FlyRank for providing access to anonymized production search analytics and LLM referral panel data.
