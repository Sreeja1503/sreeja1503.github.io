---
layout: default
title: Projects - Sreeja Yalamaddi
---

<section id="projects" class="projects-section">
	<h2>My Projects</h2>
	<!-- Tab Navigation -->
	<div class="tabs">
		<button class="tab-button active" onclick="showTab('ml')">Machine Learning</button>
		<button class="tab-button" onclick="showTab('cv')">Deep Learning (Computer Vision)</button>
		<button class="tab-button" onclick="showTab('nlp')">Natural Language Processing</button>
		<button class="tab-button" onclick="showTab('other')">Other AIML Projects</button>
	</div>

	<!-- Tab Content -->
	<div id="ml" class="tab-content active">
		<div class="project">
			<h4>Demand Anomaly Detection for Quality Process Optimization</h4>
			<p><strong>Technologies:</strong> Python, Scikit-learn, Isolation Forest, LOF, Streamlit</p>
			<p><strong>Description:</strong> Developed a sophisticated anomaly detection system for early identification of defects in manufacturing processes. Leveraged advanced techniques like Isolation Forest and Local Outlier Factor (LOF) to monitor production lines in real-time. Integrated the system into an interactive Streamlit dashboard to enable proactive quality management and continuous improvement.</p>
			<p><strong>Impact:</strong> Reduced quality incidents by 25%, saving $2M in operational costs and improving product consistency by 15%.</p>
		</div>
		<div class="project">
			<h4>Hospital Readmission & Patient Length of Stay Prediction</h4>
			<p><strong>Technologies:</strong> Python, Scikit-learn, Regression Models, AWS</p>
			<p><strong>Description:</strong> Designed a predictive model pipeline to estimate patient readmission likelihood and length of stay (LOS). The model used advanced regression techniques and integrated demographic, clinical, and historical health data to provide accurate predictions. Deployed in the cloud using AWS for real-time predictions to optimize hospital resource allocation and improve patient care.</p>
			<p><strong>Impact:</strong> Reduced hospital readmission rates by 18%, improved resource management, and saved $3M annually in operational costs.</p>
			
		</div>
		<div class="project">
			<h4>Claims Denial Prediction & Root Cause Analysis</h4>
			<p><strong>Technologies:</strong> Python, XGBoost, Logistic Regression, Claims Analytics</p>
			<p><strong>Description:</strong> Developed a robust machine learning pipeline to predict healthcare claim denials, using XGBoost and Logistic Regression to classify claims based on historical data and potential risk factors. The system not only predicts denials but also identifies key denial reasons, allowing healthcare providers to optimize their claim submission processes and reduce errors.</p>
			<p><strong>Impact:</strong> Increased claim approval rates by 30%, reduced rework and manual effort, and streamlined operational efficiency, saving healthcare providers time and costs.</p>
			
		</div>
		<div class="project">
			<h4>Customer Lifetime Value Prediction (CLV)</h4>
			<p><strong>Technologies:</strong> Python, Scikit-learn, RFM Modeling, Churn Prediction</p>
			<p><strong>Description:</strong> Created a predictive model to estimate Customer Lifetime Value (CLV) using Recency, Frequency, and Monetary (RFM) analysis combined with machine learning-based churn prediction. This model helps businesses better understand customer behavior, enabling them to focus on high-value customers and improve retention strategies through targeted marketing.</p>
			<p><strong>Impact:</strong> Boosted customer retention by 20%, increased marketing ROI by 15%, and enhanced segmentation for personalized marketing strategies.</p>
			
		</div>
		<div class="project">
			<h4>Self-Service Machine Learning Analytics for Realtors</h4>
			<p><strong>Technologies:</strong> Python, Streamlit, Scikit-learn</p>
			<p><strong>Description:</strong> Created a cloud-based, no-code platform using Streamlit that empowers real estate agents to build custom ML models, analyze customer data, and forecast property sales without writing a single line of code. This self-service platform allows realtors to independently generate actionable insights and make data-driven decisions on their own.</p>
			<p><strong>Impact:</strong> Enabled realtors to make data-driven decisions independently, increasing sales forecasting accuracy by 20% and cutting analysis time by 50%, leading to more efficient operations and increased sales potential.</p>
			
		</div>
	</div>
	<div id="nlp" class="tab-content">
		<div class="project">
			<h4>AI-Powered Investigative Search (Legal & Compliance)</h4>
			<p><strong>Technologies:</strong> Python, Hugging Face (DistilBERT, DeBERTa, T5), LangChain, FAISS</p>
			<p><strong>Description:</strong> Developed a benchmarking project using advanced open-source NLP models such as DistilBERT, DeBERTa, and T5 for legal document search and summarization. The project utilized FAISS for high-performance vector search and Retrieval-Augmented Generation (RAG) to compare the models' efficiency in quickly retrieving and summarizing relevant legal documents.</p>
			<p><strong>Outcome:</strong>  Achieved 85% retrieval accuracy with DeBERTa (5% better than DistilBERT), and T5 delivered 90% relevant summaries with an average 2.5-second response time, outperforming other models in both speed and quality</p>
			
		</div>
		<div class="project">
			<h4>Medical Chart Review Automation (NLP + OCR)</h4>
			<p><strong>Technologies:</strong> Python, OCR, spaCy, NER, NLP</p>
			<p><strong>Description:</strong> Developed an OCR-based NLP solution to automatically extract ICD codes from medical charts. This solution combines deep learning-based OCR techniques with Named Entity Recognition (NER) to accurately identify medical entities, reducing the manual effort required for chart review.</p>
			<p><strong>Impact:</strong> Increased chart review speed by 40%, reduced administrative workload, and achieved 95%+ accuracy in medical code extraction, contributing to better healthcare compliance and billing accuracy.</p>
			
		</div>
		<div class="project">
			<h4>Chatbot for Medical & Drug Information</h4>
			<p><strong>Technologies:</strong> Python, DialogFlow, NLP</p>
			<p><strong>Description:</strong> Created an intelligent chatbot using DialogFlow to provide real-time, accurate responses to medical queries regarding drugs, treatments, and medical conditions. The chatbot uses natural language understanding and advanced dialogue management for seamless interactions between users and healthcare systems.</p>
			<p><strong>Impact:</strong> Enhanced user engagement by 35%, improved information accessibility, and reduced response time for medical inquiries, offering faster and more reliable patient support.</p>
			
		</div>
		<div class="project">
			<h4>Reddit Data Annotation and Classification</h4>
			<p><strong>Technologies:</strong> Python, Scikit-learn, XGBoost, SVM, NLP (with VADER and TextBlob)</p>
			<p><strong>Description:</strong> Built a robust NLP model to automatically classify and annotate Reddit comments into predefined categories such as Technology, Education, and Workforce. This hybrid model uses lexicon-based sentiment analysis (VADER) combined with machine learning algorithms like SVM and XGBoost to improve content categorization accuracy.</p>
			<p><strong>Impact:</strong> Achieved an F1-score of 0.85, significantly enhancing content categorization and helping businesses analyze trends and public opinions more effectively.</p>
			
		</div>
		<div class="project">
			<h4>AI-Powered Knowledge Assistant for Pharma Drug Research Summarization</h4>
			<p><strong>Technologies:</strong> GPT-3, Hugging Face Transformers, FAISS, Sentence-BERT, Streamlit, LLMs</p>
			<p><strong>Description:</strong> Developed an AI-powered knowledge assistant using transformer models like GPT-3 and Sentence-BERT to summarize complex pharmaceutical drug research papers. Integrated FAISS for quick document retrieval and a Streamlit interface for an intuitive querying experience, improving access to critical research insights.</p>
			<p><strong>Potential Impact:</strong> Streamlines the research process, reducing time spent finding relevant papers and accelerating drug development.</p>
			
		</div>
	</div>
	 
	<div id="cv" class="tab-content">
		<div class="project">
			<h4>YOLO-Based Video Analytics for Retail Optimization</h4>
			<p><strong>Technologies:</strong> YOLO, OpenPose, Deep Learning, Python</p>
			<p><strong>Description:</strong> Developed a real-time computer vision system using YOLO (You Only Look Once) for object detection and OpenPose for tracking customer behavior in retail environments. The system analyzes customer interactions with products, identifying behavior patterns to optimize store layouts and improve customer experience.</p>
			<p><strong>Impact:</strong> Increased store sales by 20%, improved customer experience, and optimized store layouts based on data-driven insights, enhancing retail performance and profitability.</p>
			
		</div>
		<div class="project">
			<h4>U-Net Architecture for Defect Detection in Products</h4>
			<p><strong>Technologies:</strong> Python, U-Net, Deep Learning, Image Segmentation</p>
			<p><strong>Description:</strong> Utilized U-Net architecture for pixel-level image segmentation to detect manufacturing defects. The deep learning model automates the identification of flaws in product surfaces, drastically reducing the need for manual inspection.</p>
			<p><strong>Impact:</strong> Reduced defect detection costs by 30%, improved detection accuracy to 98%, and minimized the risk of defective products reaching consumers, ensuring higher product quality.</p>
			
		</div>
		<div class="project">
			<h4>Face Recognition & Person Tracking in Crowds</h4>
			<p><strong>Technologies:</strong> Python, OpenCV, Deep Learning, Face Recognition</p>
			<p><strong>Description:</strong> Created a real-time face recognition system optimized for large crowd environments. Leveraged deep learning and OpenCV for accurate person tracking while applying anonymization techniques to ensure data privacy and protection.</p>
			<p><strong>Impact:</strong> Achieved 99% tracking accuracy in crowded settings, improving crowd management and security, and enabling better monitoring in public spaces.</p>
			
		</div>
		<div class="project">
			<h4>Rapid Multilingual Video Generation</h4>
			<p><strong>Technologies:</strong> Deep Learning, Automatic Speech Recognition (ASR), Neural Machine Translation (NMT)</p>
			<p><strong>Description:</strong> Developed a multilingual video localization tool that synchronizes lip movements with translated audio using ASR and NMT. This solution dramatically reduced localization time from hours to minutes.</p>
			<p><strong>Impact:</strong> Enabled brands to reach a global audience faster, increasing viewer engagement by 40% and driving content personalization for diverse demographics.</p>
			
		</div>
	</div>

	<div id="other" class="tab-content">
		<h3>Other AIML Projects (Time-Series / Optimization / Survival Analysis / Cloud-based )</h3>
		<div class="project">
			<h4>Fraud Detection for Banking (Machine Learning + AI)</h4>
			<p><strong>Technologies:</strong> Python, AWS Lambda, Kinesis, Scikit-learn, Random Forest</p>
			<p><strong>Description:</strong> Designed a real-time fraud detection system using machine learning models deployed in the cloud (AWS Lambda, Kinesis). The system analyzes transaction data streams for potential fraudulent activity, utilizing Random Forest and ensemble methods for enhanced accuracy.</p>
			<p><strong>Impact:</strong> Reduced false positives by 40%, improved fraud detection accuracy, and saved financial institutions millions in potential fraud losses.</p>
			
		</div>
		<div class="project">
			<h4>MILP-Based Scheduling Optimization (Manufacturing Scheduler)</h4>
			<p><strong>Technologies:</strong> Python, GUROBI, Greedy Search, Genetic Algorithms</p>
			<p><strong>Description:</strong> Developed a Mixed-Integer Linear Programming (MILP) scheduling optimization tool for manufacturing. The system uses genetic algorithms to optimize production scheduling, balancing resources, and minimizing downtime.</p>
			<p><strong>Impact:</strong> Reduced manufacturing downtime by 25%, improved production efficiency by 18%, and maximized resource utilization, boosting manufacturing productivity.</p>
			
		</div>

		<div class="project">
			<h4>Energy Optimization Scheduling for Semiconductor Production</h4>
			<p><strong>Technologies:</strong> Python, GAMS, CPLEX, Rolling Horizon Approach</p>
			<p><strong>Description:</strong> Engineered an energy optimization scheduling solution for semiconductor plants. By utilizing a rolling horizon approach and advanced optimization techniques, the system minimizes energy consumption during production.</p>
			<p><strong>Impact:</strong> Reduced energy costs by 30%, lowering the carbon footprint and supporting sustainability goals in semiconductor manufacturing.</p>
			
		</div>

		<div class="project">
			<h4>Predictive Demand Forecasting for Supply Chain Optimization</h4>
			<p><strong>Technologies:</strong> Python, ARIMA, LSTM, Time-Series Forecasting</p>
			<p><strong>Description:</strong> Implemented ARIMA and LSTM-based time-series models to predict product demand, optimizing inventory management, production planning, and supply chain operations. Integrated the solution into a real-time analytics dashboard for better decision-making.</p>
			<p><strong>Impact:</strong> Improved demand prediction accuracy by 18%, reducing stockouts and inventory waste by 15%, leading to better resource allocation.</p>
			
		</div>

		<div class="project">
			<h4>Survival Analysis using Temporal Fusion Transformer (TFT)</h4>
			<p><strong>Technologies:</strong> Python, TensorFlow, Keras, Temporal Fusion Transformer, Survival Analysis</p>
			<p><strong>Description:</strong> Built a Temporal Fusion Transformer (TFT) model to predict vehicle repairs and maintenance needs based on historical sensor and service data. This model provided more accurate failure predictions, optimizing service scheduling and vehicle maintenance.</p>
			<p><strong> Key Insights:</strong> Achieved 25% better failure prediction accuracy, demonstrating how AI-driven forecasting can optimize maintenance scheduling and extend vehicle lifespan.</p>
			
		</div>

		<div class="project">
			<h4>Airbnb Insights Dashboard</h4>
			<p><strong>Technologies:</strong> R, Tableau, SQL</p>
			<p><strong>Description:</strong> Developed an interactive business intelligence dashboard utilizing Airbnb and Zillow data. The dashboard provides dynamic insights for hosts, investors, and users on pricing strategies, occupancy rates, and market trends to optimize their investment and property management decisions.</p>
			<p><strong>Impact:</strong> Enabled better pricing strategies and occupancy predictions, helping hosts make data-driven decisions for optimized revenue and investment..</p>
			
		</div>
	</div>
</section>