---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

I am currently a second-year Ph.D. student in the School of Computer Science and Technology at Anhui University, under the supervision of Professor Yiwen Zhang. I have been invited to serve as a reviewer for WWW, KDD, and IEEE TCSS. My research interests primarily focus on click-through prediction, multimodal data mining, and generative recommender systems:

1. **Click-through Prediction**: Click-through rate prediction is an important task for online advertising and recommendation, which aims to estimate the probability that a user will click on a certain item. Likewise, CTR prediction models have been widely applied to predicting users’ like, favorite, purchase, or download actions. These tasks are usually formulated as a binary classification problem, which incorporates rich but heterogeneous (e.g., numerical, categorical, sequential) features extracted from user profiles, item attributes, and session contexts.
2. **Multimodal Recommender Systems**: Multimodal recommender systems are capable of utilizing multiple types of data (such as text, images, audio, and video) for recommendation. Unlike traditional methods that rely solely on single-modal information, such as user ID, item ID, multimodal recommendation integrates product descriptions, user reviews, images, audio, and other content from different modalities to enhance both the accuracy and diversity of recommendations.
3. **Generative Recommender Systems**: Generative recommender systems leverage auto-encoding models, auto-regressive models, and large language models to generate personalized recommendations. In contrast to traditional recommendation methods that primarily depend on user-item interaction data, generative models introduce novel paradigms for conceptualizing and delivering recommendations, enabling more flexible and creative recommendation strategies.

# 🔥 News
- *2025.12*: &nbsp;🎉🎉 I am selected for the 2025 China Association for Science and Technology Young Scientist Sponsorship Program (Doctoral Student Special Project).
- *2025.11*: &nbsp;🎉🎉 One paper focusing on a simple yet effective cross network for CTR prediction is accepted by the SIGKDD Conference on Knowledge Discovery and Data Mining (KDD'26). 
- *2025.09*: &nbsp;🎉🎉 Winning China National Scholarship (Ranked 1st in the School of Computer Science and Technology, Anhui University, 2025).
- *2025.06*: &nbsp;🎉🎉 Winning Top 1% (14th) place in the preliminary round of the Tencent Advertising Algorithm Competition.
- *2025.05*: &nbsp;🎉🎉 One paper focusing on quadratic neural networks for CTR prediction is accepted by the SIGKDD Conference on Knowledge Discovery and Data Mining (KDD'25). 
- *2025.04*: &nbsp;🎉🎉 Winning 2nd Place in the Web Conference 2025 Multimodal CTR Prediction Challenge Track.

# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KDD 2026</div><img src='images/FCN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[FCN: Fusing Exponential and Linear Cross Network for Click-Through Rate Prediction](https://arxiv.org/abs/2407.13349) (**KDD'26, CCF A**) [[Code](https://github.com/salmon1802/FCN)]

**Honghao Li**, Yiwen Zhang, Yi Zhang, Hanwei Li, Lei Sang, Jieming Zhu. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">KDD 2025</div><img src='images/QNN.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Revisiting Feature Interactions from the Perspective of Quadratic Neural Networks for Click-through Rate Prediction](https://arxiv.org/pdf/2505.17999) (**KDD'25, CCF A**) [[Code](https://github.com/salmon1802/QNN)]

**Honghao Li**, Yiwen Zhang, Yi Zhang, Lei Sang, Jieming Zhu. 

</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">MM 2024</div><img src='images/SimCEN.jpg' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[SimCEN: Simple Contrast-enhanced Network for CTR Prediction](https://dl.acm.org/doi/abs/10.1145/3664647.3681203) (**MM'24, CCF A**) [[Code](https://github.com/salmon1802/SimCEN)]

**Honghao Li**, Lei Sang, Yi Zhang, Yiwen Zhang. 

</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">TOIS 2024</div><img src='images/CETN.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[CETN: Contrast-enhanced Through Network for Click-Through Rate Prediction](https://dl.acm.org/doi/pdf/10.1145/3688571) (**TOIS'24, CCF A**) [[Code](https://github.com/salmon1802/CETN)]

**Honghao Li**, Lei Sang, Yi Zhang, Xuyun Zhang, Yiwen Zhang

</div>
</div>

# 📝 Other Publications 
1. [**AdaGIN: Adaptive Graph Interaction Network for Click-Through Rate Prediction**](https://dl.acm.org/doi/full/10.1145/3681785).
Lei Sang, **Honghao Li**, Yiwen Zhang, Yi Zhang, Yun Yang. ACM Transactions on Information Systems (TOIS'24, CCF A)

1. [**Towards Similar Alignment and Unique Uniformity in Collaborative Filtering**](https://www.sciencedirect.com/science/article/pii/S0957417424022139).
Lei Sang, Yu Zhang, Yi Zhang, **Honghao Li**, Yiwen Zhang. Expert Systems with Applications (ESWA'24, CCF C, JCR Q1)

1. [**Dual-domain Collaborative Denoising for Social Recommendation**](https://arxiv.org/pdf/2405.04942).
Wenjie Chen, Yi Zhang, **Honghao Li**, Lei Sang, Yiwen Zhang (TCSS'24, CCF C, JCR Q1)

1. [**Large Language Model Aided QoS Prediction for Service Recommendation**](https://arxiv.org/pdf/2408.02223?).
Huiying Liu, Zekun Zhang, **Honghao Li**, Qilin Wu, and Yiwen Zhang (ICWS'25, CCF B)

1. [**From Collapse to Stability: A Knowledge-Driven Ensemble Framework for Scaling Up Click-Through Rate Prediction Models**](https://arxiv.org/pdf/2405.04942).
**Honghao Li**, Lei Sang, Yi Zhang, Guangming Cui, Yiwen Zhang

1. [**TF4CTR: Twin Focus Framework for CTR Prediction via Adaptive Sample Differentiation**](https://arxiv.org/pdf/2405.03167).
**Honghao Li**, Yiwen Zhang, Yi Zhang, Lei Sang, Yun Yang

1. [**Quadratic Interest Network for Multimodal Click-Through Rate Prediction**](https://arxiv.org/pdf/2504.17699).
**Honghao Li**, Hanwei Li, Jing Zhang, Yi Zhang, Ziniu Yu, Lei Sang, Yiwen Zhang

# 🎖 Honors and Awards
🏆2025 China Association for Science and Technology Young Scientist Sponsorship Program (Doctoral Student Special Project)

🏆China National Scholarship (Ranked 1st in the School of Computer Science and Technology, Anhui University, 2025)

🏆Second Place Globally in the MMCTR Challenge at The Web Conference 2025 ([Multimodal CTR Prediction Challenge Track](https://erel-mir.github.io/challenge/results/), [Technical Report](https://arxiv.org/pdf/2504.17699))

🏆Winning Top 1% (14th) place in the preliminary round of the [Tencent Advertising Algorithm Competition](https://algo.qq.com/).

# 📖 Educations
- *2018.09 - 2022.06*, Undergraduate student at Bengbu University. 
- *2022.09 - 2027.06*, Ph.D. student in the combined master's and doctoral program in the School of Computer Science and Technology at Anhui University. 

# 💻 Internships
- *2025.11 - 2026.02*, Research intern at Xiaohongshu.
