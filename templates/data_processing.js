const GDPR = [
    {
        name: "GDPR data processing agreement",
        matchText: `
        What is a GDPR data processing agreement?

        Virtually every business relies on third parties to process personal data. Whether it's an email client, a cloud storage service, or website analytics software, you must have a data processing agreement with each of these services to achieve GDPR compliance.

        The EU takes a more serious approach to contracts than previous EU data regulations did. If your organization is subject to the GDPR, you must have a written data processing agreement in place with all your data processors. Yes, a data processing agreement is more annoying paperwork. But it's also one of the most basic steps of GDPR compliance and necessary to avoid GDPR fines.

This guide serves as an introduction to data processing agreements — what they are, why they're important, who they're for, and what they need to say. You can also follow the link to find a GDPR data processing agreement template that you can download, customize, and use for your company.

The term “processing” appears with obnoxious frequency in this article. In the GDPR definitions, processing essentially refers to anything you can possibly do with someone's personal information: collecting it, storing it, monetizing it, destroying it, etc.

Data processing agreement basics
GDPR compliance requires data controllers to sign a data processing agreement with any parties that act as data processors on their behalf. If you need some definitions of these terms, you can find them in our “What is the GDPR” article, but typically a data processor is another company you use to help you store, analyze, or communicate personal information. For example, if you are a health insurance company and you share information about clients via encrypted email, then that encrypted email service is a data processor. Or if you use Matomo to analyze traffic on your website, Matomo would also be a data processor.

A data processing agreement is a legally binding contract that states the rights and obligations of each party concerning the protection of personal data (see “What is personal data?”). Article 28 of the GDPR covers data processing agreements under Section 3:

Processing by a processor shall be governed by a contract or other legal act under Union or Member State law, that is binding on the processor with regard to the controller and that sets out the subject-matter and duration of the processing, the nature and purpose of the processing, the type of personal data and categories of data subjects and the obligations and rights of the controller.

If you're a business owner subject to the GDPR, it is in your interest to have a data processing agreement in place: first of all, it is required for GDPR compliance, but the DPA also gives you assurances that the data processor you're using is qualified and capable. As stated in Recital 81:

When entrusting a processor with processing activities, the controller should use only processors providing sufficient guarantees, in particular in terms of expert knowledge, reliability and resources, to implement technical and organisational measures which will meet the requirements of this Regulation, including for the security of processing.

Data processing agreement example
This website, as you may know, is operated by the encrypted email provider Proton Mail (and partly funded by the European Union's Horizon 2020 program). As part of our GDPR compliance efforts, we made our own data processing agreement available to all our enterprise users to download, review, and sign.

Our DPA makes a number of guarantees to the companies that entrust us with personal data. For instance, the Proton Mail data processing agreement promises the use of technical security measures, such as encryption, as indicated in GDPR Article 32. It also offers reasonable assistance to controllers when conducting a data protection impact assessment.

For more specifics, you can read the Proton Mail data processing agreement or check out the generic data processing agreement template we've made available on this website.

What needs to be in a data processing agreement
GDPR Article 28, Section 3, explains in detail the eight topics that need to be covered in a DPA. In summary, here's what you need to include:

The processor agrees to process personal data only on written instructions of the controller.
Everyone who comes into contact with the data is sworn to confidentiality.
All appropriate technical and organizational measures are used to protect the security of the data.
The processor will not subcontract to another processor unless instructed to do so in writing by the controller, in which case another DPA will need to be signed with the sub-processor (pursuant to Sections 2 and 4 of Article 28).
The processor will help the controller uphold their obligations under the GDPR, particularly concerning data subjects' rights.
The processor will help the controller maintain GDPR compliance with regard to Article 32 (security of processing) and Article 36 (consulting with the data protection authority before undertaking high-risk processing).
The processor agrees to delete all personal data upon the termination of services or return the data to the controller.
The processor must allow the controller to conduct an audit and will provide whatever information necessary to prove compliance.

GDPR fines await those who don't comply
Since the GDPR went into force, authorities have demonstrated their willingness to issue penalties. And small- and medium-sized businesses were not overlooked. GDPR fines can range up to €20 million or 4% of the company's global revenue.

However, there are two tiers of fines, depending on the severity and type of violation. GDPR fines issued for violations related to data processors typically fall under the first tier, which guidelines state can be as severe as €10 million or 2% of global revenue.
In any case, it's much less painful to sign a data processing agreement and adhere to the terms than it is to pay a GDPR fine. We hope this guide will help. For more easy-to-digest help on GDPR compliance, check out our GDPR checklist.
`,
        gdpr_article: "https://gdpr.eu/what-is-data-processing-agreement/",
        aws_solution: [
            "https://aws.amazon.com/agreement/",
            "https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf"
        ],
    },
    {
        name: "When you're allowed to process data",
        matchText: `
        Processing shall be lawful only if and to the extent that at least one of the following applies:
the data subject has given consent to the processing of his or her personal data for one or more specific purposes;
processing is necessary for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract;
processing is necessary for compliance with a legal obligation to which the controller is subject;
processing is necessary in order to protect the vital interests of the data subject or of another natural person;
processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;
processing is necessary for the purposes of the legitimate interests pursued by the controller or by a third party, except where such interests are overridden by the interests or fundamental rights and freedoms of the data subject which require protection of personal data, in particular where the data subject is a child.
Point (f) of the first subparagraph shall not apply to processing carried out by public authorities in the performance of their tasks.

Member States may maintain or introduce more specific provisions to adapt the application of the rules of this Regulation with regard to processing for compliance with points (c) and (e) of paragraph 1 by determining more precisely specific requirements for the processing and other measures to ensure lawful and fair processing including for other specific processing situations as provided for in Chapter IX.
The basis for the processing referred to in point (c) and (e) of paragraph 1 shall be laid down by:
Union law; or
Member State law to which the controller is subject.
The purpose of the processing shall be determined in that legal basis or, as regards the processing referred to in point (e) of paragraph 1, shall be necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller. That legal basis may contain specific provisions to adapt the application of rules of this Regulation, inter alia: the general conditions governing the lawfulness of processing by the controller; the types of data which are subject to the processing; the data subjects concerned; the entities to, and the purposes for which, the personal data may be disclosed; the purpose limitation; storage periods; and processing operations and processing procedures, including measures to ensure lawful and fair processing such as those for other specific processing situations as provided for in Chapter IX. 4The Union or the Member State law shall meet an objective of public interest and be proportionate to the legitimate aim pursued.

Where the processing for a purpose other than that for which the personal data have been collected is not based on the data subject’s consent or on a Union or Member State law which constitutes a necessary and proportionate measure in a democratic society to safeguard the objectives referred to in Article 23(1), the controller shall, in order to ascertain whether processing for another purpose is compatible with the purpose for which the personal data are initially collected, take into account, inter alia:
any link between the purposes for which the personal data have been collected and the purposes of the intended further processing;
the context in which the personal data have been collected, in particular regarding the relationship between data subjects and the controller;
the nature of the personal data, in particular whether special categories of personal data are processed, pursuant to Article 9, or whether personal data related to criminal convictions and offences are processed, pursuant to Article 10;
the possible consequences of the intended further processing for data subjects;
the existence of appropriate safeguards, which may include encryption or pseudonymisation.

Any processing of personal data should be lawful and fair. It should be transparent to natural persons that personal data concerning them are collected, used, consulted or otherwise processed and to what extent the personal data are or will be processed. The principle of transparency requires that any information and communication relating to the processing of those personal data be easily accessible and easy to understand, and that clear and plain language be used. That principle concerns, in particular, information to the data subjects on the identity of the controller and the purposes of the processing and further information to ensure fair and transparent processing in respect of the natural persons concerned and their right to obtain confirmation and communication of personal data concerning them which are being processed. Natural persons should be made aware of risks, rules, safeguards and rights in relation to the processing of personal data and how to exercise their rights in relation to such processing. In particular, the specific purposes for which personal data are processed should be explicit and legitimate and determined at the time of the collection of the personal data. The personal data should be adequate, relevant and limited to what is necessary for the purposes for which they are processed. This requires, in particular, ensuring that the period for which the personal data are stored is limited to a strict minimum. Personal data should be processed only if the purpose of the processing could not reasonably be fulfilled by other means. In order to ensure that the personal data are not kept longer than necessary, time limits should be established by the controller for erasure or for a periodic review. Every reasonable step should be taken to ensure that personal data which are inaccurate are rectified or deleted. Personal data should be processed in a manner that ensures appropriate security and confidentiality of the personal data, including for preventing unauthorised access to or use of personal data and the equipment used for the processing.

In order for processing to be lawful, personal data should be processed on the basis of the consent of the data subject concerned or some other legitimate basis, laid down by law, either in this Regulation or in other Union or Member State law as referred to in this Regulation, including the necessity for compliance with the legal obligation to which the controller is subject or the necessity for the performance of a contract to which the data subject is party or in order to take steps at the request of the data subject prior to entering into a contract.
`,
        gdpr_article: "https://gdpr.eu/article-6-how-to-process-personal-data-legally/",
        aws_solution: [
            "https://aws.amazon.com/blogs/security/aws-gdpr-data-processing-addendum/",
            "https://d1.awsstatic.com/legal/aws-gdpr/AWS_GDPR_DPA.pdf"
        ],
    },
    {
        name: "Consent",
        matchText: `
        Conditions for consent

        Where processing is based on consent, the controller shall be able to demonstrate that the data subject has consented to processing of his or her personal data.
If the data subject's consent is given in the context of a written declaration which also concerns other matters, the request for consent shall be presented in a manner which is clearly distinguishable from the other matters, in an intelligible and easily accessible form, using clear and plain language. Any part of such a declaration which constitutes an infringement of this Regulation shall not be binding.
The data subject shall have the right to withdraw his or her consent at any time. The withdrawal of consent shall not affect the lawfulness of processing based on consent before its withdrawal. Prior to giving consent, the data subject shall be informed thereof. It shall be as easy to withdraw as to give consent.
When assessing whether consent is freely given, utmost account shall be taken of whether, inter alia, the performance of a contract, including the provision of a service, is conditional on consent to the processing of personal data that is not necessary for the performance of that contract.

Consent should be given by a clear affirmative act establishing a freely given, specific, informed and unambiguous indication of the data subject’s agreement to the processing of personal data relating to him or her, such as by a written statement, including by electronic means, or an oral statement. This could include ticking a box when visiting an internet website, choosing technical settings for information society services or another statement or conduct which clearly indicates in this context the data subject’s acceptance of the proposed processing of his or her personal data. Silence, pre-ticked boxes or inactivity should not therefore constitute consent. Consent should cover all processing activities carried out for the same purpose or purposes. When the processing has multiple purposes, consent should be given for all of them. If the data subject’s consent is to be given following a request by electronic means, the request must be clear, concise and not unnecessarily disruptive to the use of the service for which it is provided.

It is often not possible to fully identify the purpose of personal data processing for scientific research purposes at the time of data collection. Therefore, data subjects should be allowed to give their consent to certain areas of scientific research when in keeping with recognised ethical standards for scientific research. Data subjects should have the opportunity to give their consent only to certain areas of research or parts of research projects to the extent allowed by the intended purpose.

Where processing is based on the data subject's consent, the controller should be able to demonstrate that the data subject has given consent to the processing operation. In particular in the context of a written declaration on another matter, safeguards should ensure that the data subject is aware of the fact that and the extent to which consent is given. In accordance with Council Directive 93/13/EEC_ a declaration of consent pre-formulated by the controller should be provided in an intelligible and easily accessible form, using clear and plain language and it should not contain unfair terms. For consent to be informed, the data subject should be aware at least of the identity of the controller and the purposes of the processing for which the personal data are intended. Consent should not be regarded as freely given if the data subject has no genuine or free choice or is unable to refuse or withdraw consent without detriment.

In order to ensure that consent is freely given, consent should not provide a valid legal ground for the processing of personal data in a specific case where there is a clear imbalance between the data subject and the controller, in particular where the controller is a public authority and it is therefore unlikely that consent was freely given in all the circumstances of that specific situation. Consent is presumed not to be freely given if it does not allow separate consent to be given to different personal data processing operations despite it being appropriate in the individual case, or if the performance of a contract, including the provision of a service, is dependent on the consent despite such consent not being necessary for such performance.
`,
        gdpr_article: "https://gdpr.eu/article-7-how-to-get-consent-to-collect-personal-data/",
        aws_solution: [
            "https://docs.aws.amazon.com/whitepapers/latest/navigating-gdpr-compliance/navigating-gdpr-compliance.pdf"
        ],
    },
    {
        name: "Data protection by design and by default",
        matchText: `
        Taking into account the state of the art, the cost of implementation and the nature, scope, context and purposes of processing as well as the risks of varying likelihood and severity for rights and freedoms of natural persons posed by the processing, the controller shall, both at the time of the determination of the means for processing and at the time of the processing itself, implement appropriate technical and organisational measures, such as pseudonymisation, which are designed to implement data-protection principles, such as data minimisation, in an effective manner and to integrate the necessary safeguards into the processing in order to meet the requirements of this Regulation and protect the rights of data subjects.
The controller shall implement appropriate technical and organisational measures for ensuring that, by default, only personal data which are necessary for each specific purpose of the processing are processed. That obligation applies to the amount of personal data collected, the extent of their processing, the period of their storage and their accessibility. In particular, such measures shall ensure that by default personal data are not made accessible without the individual’s intervention to an indefinite number of natural persons.
An approved certification mechanism pursuant to Article 42 may be used as an element to demonstrate compliance with the requirements set out in paragraphs 1 and 2 of this Article.

Appropriate technical and organisational measures
The protection of the rights and freedoms of natural persons with regard to the processing of personal data require that appropriate technical and organisational measures be taken to ensure that the requirements of this Regulation are met. In order to be able to demonstrate compliance with this Regulation, the controller should adopt internal policies and implement measures which meet in particular the principles of data protection by design and data protection by default. Such measures could consist, inter alia, of minimising the processing of personal data, pseudonymising personal data as soon as possible, transparency with regard to the functions and processing of personal data, enabling the data subject to monitor the data processing, enabling the controller to create and improve security features. When developing, designing, selecting and using applications, services and products that are based on the processing of personal data or process personal data to fulfil their task, producers of the products, services and applications should be encouraged to take into account the right to data protection when developing and designing such products, services and applications and, with due regard to the state of the art, to make sure that controllers and processors are able to fulfil their data protection obligations. The principles of data protection by design and by default should also be taken into consideration in the context of public tenders.

Certification
The Member States, the supervisory authorities, the Board and the Commission shall encourage, in particular at Union level, the establishment of data protection certification mechanisms and of data protection seals and marks, for the purpose of demonstrating compliance with this Regulation of processing operations by controllers and processors. The specific needs of micro, small and medium-sized enterprises shall be taken into account.
In addition to adherence by controllers or processors subject to this Regulation, data protection certification mechanisms, seals or marks approved pursuant to paragraph 5 of this Article may be established for the purpose of demonstrating the existence of appropriate safeguards provided by controllers or processors that are not subject to this Regulation pursuant to Article 3 within the framework of personal data transfers to third countries or international organisations under the terms referred to in point (f) of Article 46(2). Such controllers or processors shall make binding and enforceable commitments, via contractual or other legally binding instruments, to apply those appropriate safeguards, including with regard to the rights of data subjects.
The certification shall be voluntary and available via a process that is transparent.
A certification pursuant to this Article does not reduce the responsibility of the controller or the processor for compliance with this Regulation and is without prejudice to the tasks and powers of the supervisory authorities which are competent pursuant to Article 55 or 56.
A certification pursuant to this Article shall be issued by the certification bodies referred to in Article 43 or by the competent supervisory authority, on the basis of criteria approved by that competent supervisory authority pursuant to Article 58(3) or by the Board pursuant to Article 63. Where the criteria are approved by the Board, this may result in a common certification, the European Data Protection Seal.
The controller or processor which submits its processing to the certification mechanism shall provide the certification body referred to in Article 43, or where applicable, the competent supervisory authority, with all information and access to its processing activities which are necessary to conduct the certification procedure.
Certification shall be issued to a controller or processor for a maximum period of three years and may be renewed, under the same conditions, provided that the relevant criteria continue to be met. Certification shall be withdrawn, as applicable, by the certification bodies referred to in Article 43 or by the competent supervisory authority where the criteria for the certification are not or are no longer met.
The Board shall collate all certification mechanisms and data protection seals and marks in a register and shall make them publicly available by any appropriate means.

In order to enhance transparency and compliance with this Regulation, the establishment of certification mechanisms and data protection seals and marks should be encouraged, allowing data subjects to quickly assess the level of data protection of relevant products and services.
`,
        gdpr_article: "https://gdpr.eu/article-25-data-protection-by-design/",
        aws_solution: [
            "https://docs.aws.amazon.com/whitepapers/latest/navigating-gdpr-compliance/navigating-gdpr-compliance.pdf",
            "https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html",
            "https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html"
        ],
    },

    // Data protection officers

    // Art. 37
    {
        name: "Designation of the data protection officer",
        matchText: `
        The controller and the processor shall designate a data protection officer in any case where:
        the processing is carried out by a public authority or body, except for courts acting in their judicial capacity;
        the core activities of the controller or the processor consist of processing operations which, by virtue of their nature, their scope and/or their purposes, require regular and systematic monitoring of data subjects on a large scale; or
        the core activities of the controller or the processor consist of processing on a large scale of special categories of data pursuant to Article 9 or personal data relating to criminal convictions and offences referred to in Article 10.
        A group of undertakings may appoint a single data protection officer provided that a data protection officer is easily accessible from each establishment.
        Where the controller or the processor is a public authority or body, a single data protection officer may be designated for several such authorities or bodies, taking account of their organisational structure and size.
        In cases other than those referred to in paragraph 1, the controller or processor or associations and other bodies representing categories of controllers or processors may or, where required by Union or Member State law shall, designate a data protection officer. The data protection officer may act for such associations and other bodies representing controllers or processors.
        The data protection officer shall be designated on the basis of professional qualities and, in particular, expert knowledge of data protection law and practices and the ability to fulfil the tasks referred to in Article 39.
        The data protection officer may be a staff member of the controller or processor, or fulfil the tasks on the basis of a service contract.
        The controller or the processor shall publish the contact details of the data protection officer and communicate them to the supervisory authority.
        `,
        gdpr_article: "https://gdpr.eu/article-37-designation-of-the-data-protection-officer/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 38
    {
        name: "Position of the data protection officer",
        matchText: `
        The controller and the processor shall ensure that the data protection officer is involved, properly and in a timely manner, in all issues which relate to the protection of personal data.
        The controller and processor shall support the data protection officer in performing the tasks referred to in Article 39 by providing resources necessary to carry out those tasks and access to personal data and processing operations, and to maintain his or her expert knowledge.
        The controller and processor shall ensure that the data protection officer does not receive any instructions regarding the exercise of those tasks. He or she shall not be dismissed or penalised by the controller or the processor for performing his tasks. The data protection officer shall directly report to the highest management level of the controller or the processor.
        Data subjects may contact the data protection officer with regard to all issues related to processing of their personal data and to the exercise of their rights under this Regulation.
        The data protection officer shall be bound by secrecy or confidentiality concerning the performance of his or her tasks, in accordance with Union or Member State law.
        The data protection officer may fulfil other tasks and duties. The controller or processor shall ensure that any such tasks and duties do not result in a conflict of interests.
        `,
        gdpr_article: "https://gdpr.eu/article-38-data-protection-officer/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 39
    {
        name: "Tasks of the data protection officer",
        matchText: `
        The data protection officer shall have at least the following tasks:
        to inform and advise the controller or the processor and the employees who carry out processing of their obligations pursuant to this Regulation and to other Union or Member State data protection provisions;
        to monitor compliance with this Regulation, with other Union or Member State data protection provisions and with the policies of the controller or processor in relation to the protection of personal data, including the assignment of responsibilities, awareness-raising and training of staff involved in processing operations, and the related audits;
        to provide advice where requested as regards the data protection impact assessment and monitor its performance pursuant to Article 35;
        to cooperate with the supervisory authority;
        to act as the contact point for the supervisory authority on issues relating to processing, including the prior consultation referred to in Article 36, and to consult, where appropriate, with regard to any other matter.
        The data protection officer shall in the performance of his or her tasks have due regard to the risk associated with processing operations, taking into account the nature, scope, context and purposes of processing.
        `,
        gdpr_article: "https://gdpr.eu/article-39-tasks-of-the-data-protection-officer/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Recital 97
    {
        name: "Data protection officer",
        matchText: `
        Where the processing is carried out by a public authority, except for courts or independent judicial authorities when acting in their judicial capacity, where, in the private sector, processing is carried out by a controller whose core activities consist of processing operations that require regular and systematic monitoring of the data subjects on a large scale, or where the core activities of the controller or the processor consist of processing on a large scale of special categories of personal data and data relating to criminal convictions and offences, a person with expert knowledge of data protection law and practices should assist the controller or processor to monitor internal compliance with this Regulation. In the private sector, the core activities of a controller relate to its primary activities and do not relate to the processing of personal data as ancillary activities. The necessary level of expert knowledge should be determined in particular according to the data processing operations carried out and the protection required for the personal data processed by the controller or the processor. Such data protection officers, whether or not they are an employee of the controller, should be in a position to perform their duties and tasks in an independent manner.
        `,
        gdpr_article: "https://gdpr.eu/Recital-97-Data-protection-officer/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },

    // People’s privacy rights

    // Art. 12
    {
        name: "Transparent information, communication and modalities for the exercise of the rights of the data subject",
        matchText: `
        The controller shall take appropriate measures to provide any information referred to in Articles 13 and 14 and any communication under Articles 15 to 22 and 34 relating to processing to the data subject in a concise, transparent, intelligible and easily accessible form, using clear and plain language, in particular for any information addressed specifically to a child. The information shall be provided in writing, or by other means, including, where appropriate, by electronic means. When requested by the data subject, the information may be provided orally, provided that the identity of the data subject is proven by other means.
        The controller shall facilitate the exercise of data subject rights under Articles 15 to 22. In the cases referred to in Article 11(2), the controller shall not refuse to act on the request of the data subject for exercising his or her rights under Articles 15 to 22, unless the controller demonstrates that it is not in a position to identify the data subject.
        The controller shall provide information on action taken on a request under Articles 15 to 22 to the data subject without undue delay and in any event within one month of receipt of the request. That period may be extended by two further months where necessary, taking into account the complexity and number of the requests. The controller shall inform the data subject of any such extension within one month of receipt of the request, together with the reasons for the delay. Where the data subject makes the request by electronic form means, the information shall be provided by electronic means where possible, unless otherwise requested by the data subject.
        If the controller does not take action on the request of the data subject, the controller shall inform the data subject without delay and at the latest within one month of receipt of the request of the reasons for not taking action and on the possibility of lodging a complaint with a supervisory authority and seeking a judicial remedy.
        Information provided under Articles 13 and 14 and any communication and any actions taken under Articles 15 to 22 and 34 shall be provided free of charge. Where requests from a data subject are manifestly unfounded or excessive, in particular because of their repetitive character, the controller may either:
        charge a reasonable fee taking into account the administrative costs of providing the information or communication or taking the action requested; or
        refuse to act on the request.
        The controller shall bear the burden of demonstrating the manifestly unfounded or excessive character of the request.
        
        Without prejudice to Article 11, where the controller has reasonable doubts concerning the identity of the natural person making the request referred to in Articles 15 to 21, the controller may request the provision of additional information necessary to confirm the identity of the data subject.
        The information to be provided to data subjects pursuant to Articles 13 and 14 may be provided in combination with standardised icons in order to give in an easily visible, intelligible and clearly legible manner a meaningful overview of the intended processing. Where the icons are presented electronically they shall be machine-readable.
        The Commission shall be empowered to adopt delegated acts in accordance with Article 92 for the purpose of determining the information to be presented by the icons and the procedures for providing standardised icons.
        `,
        gdpr_article: "https://gdpr.eu/article-12-how-controllers-should-provide-personal-data-to-the-subject/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 13
    {
        name: "Information to be provided where personal data are collected from the data subject",
        matchText: `
        Where personal data relating to a data subject are collected from the data subject, the controller shall, at the time when personal data are obtained, provide the data subject with all of the following information:
        the identity and the contact details of the controller and, where applicable, of the controller's representative;
        the contact details of the data protection officer, where applicable;
        the purposes of the processing for which the personal data are intended as well as the legal basis for the processing;
        where the processing is based on point (f) of Article 6(1), the legitimate interests pursued by the controller or by a third party;
        the recipients or categories of recipients of the personal data, if any;
        where applicable, the fact that the controller intends to transfer personal data to a third country or international organisation and the existence or absence of an adequacy decision by the Commission, or in the case of transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or suitable safeguards and the means by which to obtain a copy of them or where they have been made available.
        In addition to the information referred to in paragraph 1, the controller shall, at the time when personal data are obtained, provide the data subject with the following further information necessary to ensure fair and transparent processing:
        the period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period;
        the existence of the right to request from the controller access to and rectification or erasure of personal data or restriction of processing concerning the data subject or to object to processing as well as the right to data portability;
        where the processing is based on point (a) of Article 6(1) or point (a) of Article 9(2), the existence of the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;
        the right to lodge a complaint with a supervisory authority;
        whether the provision of personal data is a statutory or contractual requirement, or a requirement necessary to enter into a contract, as well as whether the data subject is obliged to provide the personal data and of the possible consequences of failure to provide such data;
        the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.
        Where the controller intends to further process the personal data for a purpose other than that for which the personal data were collected, the controller shall provide the data subject prior to that further processing with information on that other purpose and with any relevant further information as referred to in paragraph 2.
        Paragraphs 1, 2 and 3 shall not apply where and insofar as the data subject already has the information.
        `,
        gdpr_article: "https://gdpr.eu/article-13-personal-data-collected/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 14
    {
        name: "Information to be provided where personal data have not been obtained from the data subject",
        matchText: `
        Where personal data have not been obtained from the data subject, the controller shall provide the data subject with the following information:
        the identity and the contact details of the controller and, where applicable, of the controller’s representative;
        the contact details of the data protection officer, where applicable;
        the purposes of the processing for which the personal data are intended as well as the legal basis for the processing;
        the categories of personal data concerned;
        the recipients or categories of recipients of the personal data, if any;
        where applicable, that the controller intends to transfer personal data to a recipient in a third country or international organisation and the existence or absence of an adequacy decision by the Commission, or in the case of transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or suitable safeguards and the means to obtain a copy of them or where they have been made available.
        In addition to the information referred to in paragraph 1, the controller shall provide the data subject with the following information necessary to ensure fair and transparent processing in respect of the data subject:
        the period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period;
        where the processing is based on point (f) of Article 6(1), the legitimate interests pursued by the controller or by a third party;
        the existence of the right to request from the controller access to and rectification or erasure of personal data or restriction of processing concerning the data subject and to object to processing as well as the right to data portability;
        where processing is based on point (a) of Article 6(1) or point (a) of Article 9(2), the existence of the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;
        the right to lodge a complaint with a supervisory authority;
        from which source the personal data originate, and if applicable, whether it came from publicly accessible sources;
        the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.
        The controller shall provide the information referred to in paragraphs 1 and 2:
        within a reasonable period after obtaining the personal data, but at the latest within one month, having regard to the specific circumstances in which the personal data are processed;
        if the personal data are to be used for communication with the data subject, at the latest at the time of the first communication to that data subject; or
        if a disclosure to another recipient is envisaged, at the latest when the personal data are first disclosed.
        Where the controller intends to further process the personal data for a purpose other than that for which the personal data were obtained, the controller shall provide the data subject prior to that further processing with information on that other purpose and with any relevant further information as referred to in paragraph 2.
        Paragraphs 1 to 4 shall not apply where and insofar as:
        the data subject already has the information;
        the provision of such information proves impossible or would involve a disproportionate effort, in particular for processing for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes, subject to the conditions and safeguards referred to in Article 89(1) or in so far as the obligation referred to in paragraph 1 of this Article is likely to render impossible or seriously impair the achievement of the objectives of that processing. In such cases the controller shall take appropriate measures to protect the data subject’s rights and freedoms and legitimate interests, including making the information publicly available;
        obtaining or disclosure is expressly laid down by Union or Member State law to which the controller is subject and which provides appropriate measures to protect the data subject’s legitimate interests; or
        where the personal data must remain confidential subject to an obligation of professional secrecy regulated by Union or Member State law, including a statutory obligation of secrecy.
        `,
        gdpr_article: "https://gdpr.eu/article-14-personal-data-not-obtained-from-data-subject/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 15
    {
        name: "Right of access by the data subject",
        matchText: `
        The data subject shall have the right to obtain from the controller confirmation as to whether or not personal data concerning him or her are being processed, and, where that is the case, access to the personal data and the following information:
        the purposes of the processing;
        the categories of personal data concerned;
        the recipients or categories of recipient to whom the personal data have been or will be disclosed, in particular recipients in third countries or international organisations;
        where possible, the envisaged period for which the personal data will be stored, or, if not possible, the criteria used to determine that period;
        the existence of the right to request from the controller rectification or erasure of personal data or restriction of processing of personal data concerning the data subject or to object to such processing;
        the right to lodge a complaint with a supervisory authority;
        where the personal data are not collected from the data subject, any available information as to their source;
        the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the logic involved, as well as the significance and the envisaged consequences of such processing for the data subject.
        Where personal data are transferred to a third country or to an international organisation, the data subject shall have the right to be informed of the appropriate safeguards pursuant to Article 46 relating to the transfer.
        The controller shall provide a copy of the personal data undergoing processing. For any further copies requested by the data subject, the controller may charge a reasonable fee based on administrative costs. Where the data subject makes the request by electronic means, and unless otherwise requested by the data subject, the information shall be provided in a commonly used electronic form.
        The right to obtain a copy referred to in paragraph 3 shall not adversely affect the rights and freedoms of others.
        `,
        gdpr_article: "https://gdpr.eu/article-15-right-of-access/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 16
    {
        name: "Right to rectification",
        matchText: `
        The data subject shall have the right to obtain from the controller without undue delay the rectification of inaccurate personal data concerning him or her. Taking into account the purposes of the processing, the data subject shall have the right to have incomplete personal data completed, including by means of providing a supplementary statement.
        `,
        gdpr_article: "https://gdpr.eu/article-16-right-to-rectification/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 17
    {
        name: "Right to erasure ('right to be forgotten')",
        matchText: `
        The data subject shall have the right to obtain from the controller the erasure of personal data concerning him or her without undue delay and the controller shall have the obligation to erase personal data without undue delay where one of the following grounds applies:
        the personal data are no longer necessary in relation to the purposes for which they were collected or otherwise processed;
        the data subject withdraws consent on which the processing is based according to point (a) of Article 6(1), or point (a) of Article 9(2), and where there is no other legal ground for the processing;
        the data subject objects to the processing pursuant to Article 21(1) and there are no overriding legitimate grounds for the processing, or the data subject objects to the processing pursuant to Article 21(2);
        the personal data have been unlawfully processed;
        the personal data have to be erased for compliance with a legal obligation in Union or Member State law to which the controller is subject;
        the personal data have been collected in relation to the offer of information society services referred to in Article 8(1).
        Where the controller has made the personal data public and is obliged pursuant to paragraph 1 to erase the personal data, the controller, taking account of available technology and the cost of implementation, shall take reasonable steps, including technical measures, to inform controllers which are processing the personal data that the data subject has requested the erasure by such controllers of any links to, or copy or replication of, those personal data.
        Paragraphs 1 and 2 shall not apply to the extent that processing is necessary:
        for exercising the right of freedom of expression and information;
        for compliance with a legal obligation which requires processing by Union or Member State law to which the controller is subject or for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller;
        for reasons of public interest in the area of public health in accordance with points (h) and (i) of Article 9(2) as well as Article 9(3);
        for archiving purposes in the public interest, scientific or historical research purposes or statistical purposes in accordance with Article 89(1) in so far as the right referred to in paragraph 1 is likely to render impossible or seriously impair the achievement of the objectives of that processing; or
        for the establishment, exercise or defence of legal claims.
        `,
        gdpr_article: "https://gdpr.eu/article-17-right-to-be-forgotten/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 18
    {
        name: "Right to restriction of processing",
        matchText: `
        The data subject shall have the right to obtain from the controller restriction of processing where one of the following applies:
        the accuracy of the personal data is contested by the data subject, for a period enabling the controller to verify the accuracy of the personal data;
        the processing is unlawful and the data subject opposes the erasure of the personal data and requests the restriction of their use instead;
        the controller no longer needs the personal data for the purposes of the processing, but they are required by the data subject for the establishment, exercise or defence of legal claims;
        the data subject has objected to processing pursuant to Article 21(1) pending the verification whether the legitimate grounds of the controller override those of the data subject.
        Where processing has been restricted under paragraph 1, such personal data shall, with the exception of storage, only be processed with the data subject’s consent or for the establishment, exercise or defence of legal claims or for the protection of the rights of another natural or legal person or for reasons of important public interest of the Union or of a Member State.
        A data subject who has obtained restriction of processing pursuant to paragraph 1 shall be informed by the controller before the restriction of processing is lifted.
        `,
        gdpr_article: "https://gdpr.eu/article-18-right-to-restriction-of-processing/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 19
    {
        name: "Notification obligation regarding rectification or erasure of personal data or restriction of processing",
        matchText: `
        The controller shall communicate any rectification or erasure of personal data or restriction of processing carried out in accordance with Article 16, Article 17(1) and Article 18 to each recipient to whom the personal data have been disclosed, unless this proves impossible or involves disproportionate effort. The controller shall inform the data subject about those recipients if the data subject requests it.
        `,
        gdpr_article: "https://gdpr.eu/article-19-notification-obligation/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 20
    {
        name: "Right to data portability",
        matchText: `
        The data subject shall have the right to receive the personal data concerning him or her, which he or she has provided to a controller, in a structured, commonly used and machine-readable format and have the right to transmit those data to another controller without hindrance from the controller to which the personal data have been provided, where:
        the processing is based on consent pursuant to point (a) of Article 6(1) or point (a) of Article 9(2) or on a contract pursuant to point (b) of Article 6(1); and
        the processing is carried out by automated means.
        In exercising his or her right to data portability pursuant to paragraph 1, the data subject shall have the right to have the personal data transmitted directly from one controller to another, where technically feasible.
        The exercise of the right referred to in paragraph 1 of this Article shall be without prejudice to Article 17. That right shall not apply to processing necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller.
        The right referred to in paragraph 1 shall not adversely affect the rights and freedoms of others.
        `,
        gdpr_article: "https://gdpr.eu/article-20-right-to-data-portability/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 21
    {
        name: "Right to object",
        matchText: `
        The data subject shall have the right to object, on grounds relating to his or her particular situation, at any time to processing of personal data concerning him or her which is based on point (e) or (f) of Article 6(1), including profiling based on those provisions. The controller shall no longer process the personal data unless the controller demonstrates compelling legitimate grounds for the processing which override the interests, rights and freedoms of the data subject or for the establishment, exercise or defence of legal claims.
        Where personal data are processed for direct marketing purposes, the data subject shall have the right to object at any time to processing of personal data concerning him or her for such marketing, which includes profiling to the extent that it is related to such direct marketing.
        Where the data subject objects to processing for direct marketing purposes, the personal data shall no longer be processed for such purposes.
        At the latest at the time of the first communication with the data subject, the right referred to in paragraphs 1 and 2 shall be explicitly brought to the attention of the data subject and shall be presented clearly and separately from any other information.
        In the context of the use of information society services, and notwithstanding Directive 2002/58/EC, the data subject may exercise his or her right to object by automated means using technical specifications.
        Where personal data are processed for scientific or historical research purposes or statistical purposes pursuant to Article 89(1), the data subject, on grounds relating to his or her particular situation, shall have the right to object to processing of personal data concerning him or her, unless the processing is necessary for the performance of a task carried out for reasons of public interest.
        `,
        gdpr_article: "https://gdpr.eu/article-21-right-to-object/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 22
    {
        name: "Automated individual decision-making, including profiling",
        matchText: `
        The data subject shall have the right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning him or her or similarly significantly affects him or her.
        Paragraph 1 shall not apply if the decision:
        is necessary for entering into, or performance of, a contract between the data subject and a data controller;
        is authorised by Union or Member State law to which the controller is subject and which also lays down suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests; or
        is based on the data subject’s explicit consent.
        In the cases referred to in points (a) and (c) of paragraph 2, the data controller shall implement suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests, at least the right to obtain human intervention on the part of the controller, to express his or her point of view and to contest the decision.
        Decisions referred to in paragraph 2 shall not be based on special categories of personal data referred to in Article 9(1), unless point (a) or (g) of Article 9(2) applies and suitable measures to safeguard the data subject’s rights and freedoms and legitimate interests are in place.
        `,
        gdpr_article: "https://gdpr.eu/article-22-automated-individual-decision-making/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
    // Art. 23
    {
        name: "Restrictions",
        matchText: `
        Union or Member State law to which the data controller or processor is subject may restrict by way of a legislative measure the scope of the obligations and rights provided for in Articles 12 to 22 and Article 34, as well as Article 5 in so far as its provisions correspond to the rights and obligations provided for in Articles 12 to 22, when such a restriction respects the essence of the fundamental rights and freedoms and is a necessary and proportionate measure in a democratic society to safeguard:
        national security;
        defence;
        public security;
        the prevention, investigation, detection or prosecution of criminal offences or the execution of criminal penalties, including the safeguarding against and the prevention of threats to public security;
        other important objectives of general public interest of the Union or of a Member State, in particular an important economic or financial interest of the Union or of a Member State, including monetary, budgetary and taxation a matters, public health and social security;
        the protection of judicial independence and judicial proceedings;
        the prevention, investigation, detection and prosecution of breaches of ethics for regulated professions;
        a monitoring, inspection or regulatory function connected, even occasionally, to the exercise of official authority in the cases referred to in points (a) to (e) and (g);
        the protection of the data subject or the rights and freedoms of others;
        the enforcement of civil law claims.
        In particular, any legislative measure referred to in paragraph 1 shall contain specific provisions at least, where relevant, as to:
        the purposes of the processing or categories of processing;
        the categories of personal data;
        the scope of the restrictions introduced;
        the safeguards to prevent abuse or unlawful access or transfer;
        the specification of the controller or categories of controllers;
        the storage periods and the applicable safeguards taking into account the nature, scope and purposes of the processing or categories of processing;
        the risks to the rights and freedoms of data subjects; and
        the right of data subjects to be informed about the restriction, unless that may be prejudicial to the purpose of the restriction.
        `,
        gdpr_article: "https://gdpr.eu/article-23-restrictions/",
        aws_solution: [
            "TODO",
            "TODO"
        ],
    },
];

module.exports = GDPR;