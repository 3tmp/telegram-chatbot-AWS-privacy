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
];

module.exports = GDPR;