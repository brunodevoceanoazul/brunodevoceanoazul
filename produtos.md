# Product engineering · Bruno Bisogni

A technical overview of my role in the products presented in my portfolio. Each case provides context for an interview and links to public product material. Implementation details are described at a high level suitable for external review.

## ÍRIS

**Role** · Founder and tech lead.  
**Stack** · TypeScript, NestJS modular monolith, Next.js, Drizzle ORM, PostgreSQL, AWS.

I helped redirect the product toward personal safety for women and worked on the implementation across a modular NestJS monolith, web application, integrations, and consent workflows. NestJS modules compose the backend application, organizing responsibilities within one deployable application. The product connects individual actions with a trusted contact network.

The implementation separates domain contracts from infrastructure adapters and uses relational transactions to persist related records together. Tests exercise successful operations and failure paths. In an engineering interview, I can discuss service boundaries, integration failure handling, permissions, and data minimization. Any demonstration should use a separate environment with synthetic records.

**Em português** · Atuei na mudança de foco do produto e na implementação de API, interface web, integrações e fluxos de consentimento. Posso apresentar decisões de organização do código e tratamento de falhas com exemplos independentes.

[Public product write-up](https://www.linkedin.com/feed/update/urn:li:activity:7519461241631797248/)

## Periscópio

**Role** · Tech lead and full-stack developer, since November 2025.  
**Current application stack** · TypeScript, Next.js, Fastify monolith, Drizzle ORM, PostgreSQL.

I lead engineering and implement workflows that connect school observations with healthcare referrals. My work includes forms, role-based permissions, case history, and data modeling. The MVP has been described publicly as being in internal validation with professionals.

A concrete technical case is a change attributed to my account that normalizes role names before state-machine validation and handles conflicting transitions with database transactions and conditional updates. Related regression tests cover authorization and concurrent operations. I can explain the failure scenario, the correction, and the limits of the validation.

**Em português** · Lidero a engenharia e desenvolvo o fluxo entre escola e saúde. O escopo inclui formulários, permissões, histórico e modelo de dados. A implementação atual da API usa Node.js com Fastify e TypeScript.

[Public MVP write-up](https://www.linkedin.com/feed/update/urn:li:activity:7519483771901865985/)

## HIVIUM / Sócio do Tabuleiro

**Role** · Founder and product lead, 2023–2026. CTO, 2023–2025.  
**Technical scope** · React, APIs, logistics and digital contract integrations, GCP architecture.

I helped evolve the business from game rental operations into a SaaS and marketplace direction. As CTO, I led development and integrations. For the successor platform, HIVIUM, my role included architecture and the organization of product modules.

Relevant interview topics include deciding between building and integrating, managing external dependencies, planning delivery as a business model evolves, and translating community needs into product behavior.

**Em português** · Liderei desenvolvimento e integrações na evolução do Sócio do Tabuleiro. Na HIVIUM, atuei no desenho da arquitetura e na organização dos módulos do produto sucessor.

[Public beta announcement](https://www.linkedin.com/feed/update/urn:li:activity:7440522540940177408/)

## Radar Jurídico

**Role** · Backend and data engineering in an internal product.  
**Technical scope** · Python, FastAPI, SQLAlchemy, PostgreSQL, APIs, data modeling, query strategy.

This is a collaborative product: recent implementation history includes substantial contributions by another developer. My portfolio distinguishes product participation and integration of team deliveries from individual implementation authorship. The reviewed backend contains provider adapters, query caching, historical records, and cost controls; these describe the project architecture, not a claim that I authored every component.

**Em português** · Atuação colaborativa no produto e na integração das entregas. O código do projeto demonstra backend Python, cache e integração de provedores; a autoria de cada implementação deve ser atribuída pelo histórico de contribuição.

[Professional background](https://www.linkedin.com/in/brunobisogni/)

## Oceano Azul

**Role** · Founder and tech lead, since 2025.  
**Technical scope** · Requirements, software architecture, full-stack development and integrations. Website built with Next.js, React and TypeScript.

My consultancy brings together software delivery and product work. My experience across healthcare, legal information, communities, logistics, and retail gives me a practical basis for discussing tradeoffs with business teams.

**Em português** · A Oceano Azul reúne minha atuação em requisitos, arquitetura e desenvolvimento. O site apresenta os produtos e a trajetória profissional.

[Website](https://oceanoazul.dev.br/)

## Dashboards · wtime

**Role** · Senior Customer Insights Analyst, 2022–2023.  
**Stack** · SQL, BigQuery, Power BI.

Built observability dashboards and metrics. The work demonstrates defining indicators, preparing data for analysis, and presenting operational information to business teams.

**Em português** · Construí dashboards e indicadores de observabilidade com BigQuery e Power BI.

## Levoo · Logistics integrations

**Role** · CTO, 2019–2020.

Led the affiliate-system project and integration with a bank’s delivery-related systems. This case demonstrates integration design, coordination with external teams, and technical delivery leadership.

**Em português** · Liderei o projeto do sistema de afiliados e a integração com sistemas de um banco.

## Food Finder · Retail integration

**Role** · CTO, 2019.

Designed an integration with a retail group and managed the implementation team. The relevant engineering experience is integration architecture and coordination of delivery across organizations.

**Em português** · Desenhei a integração com uma rede de varejo e gerenciei sua implementação.

## Social Ball · Digital product

**Role** · Technical leadership at ABCE Service, 2014–2016.

Led the technical team associated with the digital product and the transition from offline to online channels.

**Em português** · Liderei o time técnico ligado ao Social Ball e à transição dos canais offline para online.

[Public project background](https://oceanoazul.dev.br/)

## Engineering portfolio

[Complete source of the bilingual Next.js portfolio](https://github.com/brunodevoceanoazul/portfolio)
