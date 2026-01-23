// All project data in structured format
const projectsData = [
    {
        id: 'predictwise',
        title: 'PredictWise App',
        category: 'Full-Stack AI',
        summary: 'Multi-model prediction engine with authentication, history tracking, and admin panel.',
        techStack: ['Python', 'FastAPI', 'SQL', 'Scikit-learn'],
        featured: true,
        github: 'https://github.com/saimonemon46/PredictWise.git',
        demo: 'https://youtu.be/rE4Ma4ITB8Q',
        caseStudy: {
            problem: 'Users need accurate predictions for items like cars or laptops but lack a centralized system that provides insights, history tracking, and secure user-specific recommendations.',
            whyMatters: 'Prediction data supports better decision-making and enables businesses to build recommendation pipelines and personalized systems.',
            solution: 'PredictWise is a full-stack web application that integrates multiple machine learning models to provide predictions for car and laptop prices. The system includes user authentication, prediction history tracking, an admin dashboard for monitoring, and a chatbot for recommendations. The architecture combines FastAPI for the backend, SQL for data persistence, and pre-trained ML models for inference.',
            architecture: [
                'User Interface (Web Frontend)',
                'FastAPI Backend - Authentication • Routing • Validation',
                'ML Models (.pkl) - Car Price • Laptop Price',
                'SQL Database - Users • Predictions • History',
                'Admin Dashboard - User Management • Prediction Analytics'
            ],
            technical: {
                backend: 'FastAPI handles all HTTP requests with dedicated routes for authentication, predictions, and admin operations. JWT-based authentication middleware secures endpoints. Model loading occurs at startup to minimize latency. Database transactions use SQLAlchemy ORM for type safety and connection pooling.',
                ml: 'Scikit-learn models trained on historical price data are serialized as pickle files. Input validation ensures feature consistency. Preprocessing pipelines handle categorical encoding and numerical scaling. Model versioning tracks which model generated each prediction.',
                database: 'Three main tables: Users (authentication), Predictions (model outputs), and History (user activity). Foreign keys link predictions to users. Indexes on user_id and timestamp fields optimize query performance. Schema designed for horizontal scaling.'
            },
            decisions: [
                {
                    title: 'FastAPI over Flask',
                    reason: 'Automatic API documentation, native async support, and built-in data validation through Pydantic models.'
                },
                {
                    title: 'SQL over NoSQL',
                    reason: 'Structured relationships between users and predictions require ACID compliance and complex joins.'
                },
                {
                    title: 'Pickle serialization',
                    reason: 'Simple deployment without model retraining infrastructure. Trade-off: version compatibility issues.'
                },
                {
                    title: 'Server-side rendering',
                    reason: 'Reduced client-side complexity for admin dashboard. Future migration to React possible.'
                }
            ],
            limitations: 'Model accuracy depends on training data quality and coverage. System does not support real-time model updates. Limited to two prediction types (car and laptop). No distributed caching layer leads to repeated database queries. Admin dashboard lacks advanced analytics visualizations.',
            improvements: [
                'Implement Redis caching for frequent prediction requests',
                'Add batch prediction endpoints for bulk operations',
                'Deploy using Docker and CI/CD pipeline',
                'Enhance models with feature engineering and ensemble methods',
                'Build real-time monitoring dashboard with Prometheus and Grafana'
            ]
        }
    },
    {
        id: 'pdfqa',
        title: 'PDF-QA System',
        category: 'AI Systems',
        summary: 'Question answering system using LangChain and semantic search.',
        techStack: ['LangChain', 'FastAPI', 'Groq API', 'Vector DB'],
        featured: false,
        github: '#',
        demo: '#',
        caseStudy: {
            problem: 'Extracting specific information from large PDF documents is time-consuming and error-prone. Users need a system that can understand context and provide accurate answers from document content.',
            whyMatters: 'Document question-answering systems enable efficient information retrieval, reducing manual search time and improving productivity for research, legal, and business applications.',
            solution: 'A PDF-based question-answering system built with LangChain that combines document parsing, embedding generation, and semantic search. The system uses Groq APIs for fast LLM inference and FastAPI for exposing RESTful endpoints.',
            architecture: [
                'PDF Upload Interface',
                'Document Parser - Text Extraction • Chunking',
                'Embedding Model - Vector Generation',
                'Vector Database - Semantic Storage',
                'LangChain Query Pipeline - Retrieval • LLM Processing',
                'FastAPI Endpoints - Question/Answer API'
            ],
            technical: {
                backend: 'FastAPI manages document upload, processing queues, and query handling. Async endpoints prevent blocking during PDF parsing. Rate limiting protects against abuse.',
                ml: 'LangChain orchestrates the RAG pipeline. Text splitters chunk documents while preserving context. Embeddings generated using sentence-transformers. Vector database enables similarity search for relevant chunks.',
                database: 'Vector database stores document embeddings with metadata. Supports k-nearest neighbor search for retrieval. Document metadata includes source file, page numbers, and timestamps.'
            },
            decisions: [
                {
                    title: 'LangChain framework',
                    reason: 'Pre-built components for document loading, chunking, and retrieval chains reduce development time.'
                },
                {
                    title: 'Groq API',
                    reason: 'Extremely fast inference speeds compared to standard OpenAI endpoints, improving user experience.'
                },
                {
                    title: 'Semantic chunking',
                    reason: 'Maintains context better than fixed-size chunks, improving answer quality.'
                }
            ],
            limitations: 'Performance degrades with very large PDFs (100+ pages). Does not support scanned documents without OCR. Answer quality depends on chunk quality and retrieval accuracy. No support for multi-document reasoning.',
            improvements: [
                'Add OCR support for scanned documents',
                'Implement hybrid search (keyword + semantic)',
                'Add source citation with page numbers in answers',
                'Support multi-document query across document collection',
                'Add answer confidence scoring'
            ]
        }
    },
    {
        id: 'autodoc',
        title: 'Python Auto-Documentation',
        category: 'AI Tools',
        summary: 'Automated documentation generator for Python projects using LLMs.',
        techStack: ['LangChain', 'Llama3', 'FastAPI', 'Groq API'],
        featured: false,
        github: 'https://github.com/saimonemon46/Auto-Code-Dcoumentation.git',
        demo: 'https://youtu.be/xhl2dsSN5YM',
        caseStudy: {
            problem: 'Maintaining up-to-date documentation for code projects is tedious and often neglected. Developers need automated tools that generate clear, comprehensive documentation from code.',
            whyMatters: 'Good documentation improves code maintainability, team collaboration, and onboarding. Automated generation ensures consistency and saves developer time.',
            solution: 'An automated documentation tool that analyzes Python codebases and generates README files, function documentation, and usage examples using LangChain and Llama3. FastAPI endpoints accept repository URLs or code files and return formatted documentation.',
            architecture: [
                'Code Input - Repository URL or Files',
                'Code Parser - AST Analysis • Function Extraction',
                'LangChain Pipeline - Template Processing',
                'Llama3 via Groq - Documentation Generation',
                'FastAPI Endpoints - API Interface',
                'Formatted Output - Markdown Documentation'
            ],
            technical: {
                backend: 'FastAPI processes code submission and manages generation workflows. Background tasks handle long-running documentation jobs. WebSocket support for real-time generation updates.',
                ml: 'LangChain templates structure documentation format. Llama3 generates natural language descriptions from code analysis. Prompt engineering ensures consistent documentation style.',
                database: 'Optional caching of generated documentation to avoid regeneration. Stores generation history and user preferences.'
            },
            decisions: [
                {
                    title: 'Llama3 model',
                    reason: 'Strong performance on code understanding tasks with fast inference via Groq.'
                },
                {
                    title: 'Template-based generation',
                    reason: 'Ensures consistent documentation structure across different codebases.'
                },
                {
                    title: 'AST parsing',
                    reason: 'More reliable than regex for extracting code structure and relationships.'
                }
            ],
            limitations: 'Limited to Python codebases. Generated documentation requires human review. Does not capture business logic or architectural decisions. Performance varies with code complexity.',
            improvements: [
                'Support additional languages (JavaScript, TypeScript, Go)',
                'Add diagram generation for architecture visualization',
                'Integrate with CI/CD for automated updates',
                'Add documentation quality scoring',
                'Support incremental updates instead of full regeneration'
            ]
        }
    },
    {
        id: 'langgraph',
        title: 'LangGraph Chatbot',
        category: 'AI Agent',
        summary: 'Advanced chatbot with threaded conversations and tool integration.',
        techStack: ['LangGraph', 'Streamlit', 'FastAPI', 'Weather API', 'News API'],
        featured: true,
        github: '#',
        demo: '#',
        caseStudy: {
            problem: 'Traditional chatbots lack persistent conversation context, tool integration, and structured state management. Building conversational agents that maintain thread history while accessing external APIs requires complex orchestration.',
            whyMatters: 'Agentic AI systems that combine LLM reasoning with external tools enable sophisticated workflows for information retrieval, task automation, and context-aware assistance.',
            solution: 'LangGraph Chat System is a graph-based conversational agent that uses LangGraph\'s state machine architecture to manage multi-turn conversations. The system integrates weather APIs, news APIs, and memory persistence to provide contextual responses. Streamlit provides the UI layer while FastAPI handles backend endpoints.',
            architecture: [
                'User Input (Streamlit UI)',
                'FastAPI Endpoints',
                'LangGraph State Machine - Parser → LLM → Tools → Memory',
                'External APIs - Weather • News • Web Search',
                'Conversation Memory - Threaded History Storage'
            ],
            technical: {
                backend: 'FastAPI manages conversation state and API routing. Session management tracks individual conversation threads. Middleware handles authentication and rate limiting.',
                ml: 'LangGraph state graph defines nodes for input parsing, LLM processing, tool execution, and memory updates. Conditional edges route based on user intent. State persistence enables conversation resumption across sessions.',
                database: 'Threaded conversation history stored with unique session IDs. Message summarization prevents context window overflow. Vector embeddings enable semantic search across past conversations.'
            },
            decisions: [
                {
                    title: 'LangGraph over LangChain',
                    reason: 'Explicit state management and graph visualization simplify debugging complex agent workflows.'
                },
                {
                    title: 'Streamlit for UI',
                    reason: 'Rapid prototyping and built-in session state management. Trade-off: limited customization compared to React.'
                },
                {
                    title: 'FastAPI backend separation',
                    reason: 'Decouples agent logic from UI, enabling future mobile clients or API-only deployments.'
                },
                {
                    title: 'Tool integration pattern',
                    reason: 'Standardized wrapper for external APIs ensures consistent error handling and response formatting.'
                }
            ],
            limitations: 'Tool execution latency affects response time. Limited error recovery for failed API calls. Memory grows unbounded without summarization. UI limited to Streamlit capabilities.',
            improvements: [
                'Add parallel tool execution to reduce latency',
                'Implement automatic conversation summarization',
                'Add tool result caching',
                'Build React frontend for better UX',
                'Add voice input/output capabilities',
                'Implement multi-agent collaboration'
            ]
        }
    },
    {
        id: 'airline',
        title: 'Airline Seat Management',
        category: 'Backend',
        summary: 'Full-featured booking system with authentication and admin dashboard.',
        techStack: ['C#', '.NET MVC', 'SQL Server', 'ASP.NET'],
        featured: true,
        github: '#',
        demo: '#',
        caseStudy: {
            problem: 'Managing airline seat bookings requires complex business logic for availability checking, user authentication, booking history, and administrative oversight. Manual systems are error-prone and inefficient.',
            whyMatters: 'Automated booking systems improve operational efficiency, reduce booking errors, and provide better user experience through real-time availability and instant confirmations.',
            solution: 'A full-featured airline seat management system built with C# and ASP.NET MVC. The application handles user authentication, seat selection, booking management, payment processing, and includes a comprehensive admin dashboard. SQL Server provides the data layer with proper transaction management.',
            architecture: [
                'Web Interface (ASP.NET MVC Views)',
                'Controller Layer - Business Logic • Validation',
                'Service Layer - Booking Engine • Authentication',
                'SQL Server Database - Users • Flights • Bookings • Seats',
                'Admin Dashboard - Flight Management • User Analytics'
            ],
            technical: {
                backend: 'ASP.NET MVC architecture separates concerns between views, controllers, and models. Entity Framework manages database operations. Identity framework handles authentication and authorization. Session management tracks user state.',
                database: 'Normalized schema with tables for Users, Flights, Seats, Bookings, and Payments. Foreign keys ensure referential integrity. Transactions prevent double-booking through optimistic concurrency control. Indexes on flight_id and booking_date optimize queries.',
                security: 'Password hashing using ASP.NET Identity. Role-based access control separates user and admin privileges. SQL injection prevention through parameterized queries. CSRF protection on all forms.'
            },
            decisions: [
                {
                    title: 'ASP.NET MVC',
                    reason: 'Mature framework with strong security features, built-in authentication, and excellent tooling support.'
                },
                {
                    title: 'SQL Server',
                    reason: 'ACID compliance critical for booking transactions. Strong integration with .NET ecosystem.'
                },
                {
                    title: 'Entity Framework',
                    reason: 'Type-safe database operations and automatic migrations reduce development time.'
                },
                {
                    title: 'Server-side rendering',
                    reason: 'Better SEO and simpler deployment compared to SPA architecture.'
                }
            ],
            limitations: 'No real-time seat updates require page refresh. Payment integration is simulated. Limited mobile responsiveness. No email notification system. Admin dashboard lacks advanced analytics.',
            improvements: [
                'Add SignalR for real-time seat availability updates',
                'Integrate payment gateway (Stripe/PayPal)',
                'Build responsive mobile interface',
                'Add email confirmation system',
                'Implement booking reports and analytics',
                'Add flight search and filtering',
                'Support multiple seat classes and pricing tiers'
            ]
        }
    }
];

// Export for use in navigation.js
window.projectsData = projectsData;