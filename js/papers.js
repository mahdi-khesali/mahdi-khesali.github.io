document.getElementById('categorySelect').addEventListener('change', function() {
    if (this.value) {
        applyFilter(); 
    } else {
        document.getElementById('papersList').innerHTML = '';
    }
});

function applyFilter() {
    // Mock data for the papers based on different categories
    let dataByField = {
        "Political Economy and Public Choice": [{
            "name": "Unconstitutional State of Emergency",
            "field": "Political Economy and Public Choice",
            "method": "Observational",
            "stage": "Published",
            "url": "https://www.journals.uchicago.edu/doi/abs/10.1086/718681?journalCode=jls",
            "coauthors": ["Christian Bjørnskov", "Stefan Voigt"]
        }, 
        {
            "name": "Constitutional Comprehensibility and the Coordination of Citizens: A Test of the Weingast-Hypothesis Emergency",
            "field": "Political Economy and Public Choice",
            "method": "Observational (Text As Data)",
            "stage": "Published",
            "url": "https://lawreviewblog.uchicago.edu/2021/04/05/cv-gutmann-khesali-voigt",
            "coauthors": ["Jerg Gutmann", "Stefan Voigt"]
        }, 
        {
            "name": "Doing It Right, Doing It Wrong: The Effect of Expressive Voting",
            "field": "Political Economy and Public Choice",
            "method": "Experimental",
            "stage": "Work in Progress",
            "url": "",
            "coauthors": ["Yoan Hermstrüwer"]
        }],
        "Cultural Economics": [{
            "name": "Historic Moral Foundations Cast a Long Shadow: Insights From a Novel Folktale Dataset",
            "field": "Cultural Economics",
            "method": "Empirical (Observational-Text As Data)",
            "stage": "Work in Progress",
            "url": "",
            "coauthors": ["Stefan Voigt", "Nadia von Jacobi"]
        },
        {
            "name": "Once Upon Time: Introducing the Historical Values Survey",
            "field": "Cultural Economics",
            "method": "Empirical (Observational-Text As Data)",
            "stage": "Working Paper",
            "url": "",
            "coauthors": ["Stefan Voigt", "Nadia von Jacobi"]
        }], 
        "Contract Theory": [{
            "name": "Terms of Contract as Mirror of Your Image",
            "field": "Contract Theory",
            "method": "Experimental",
            "stage": "Work in Progress",
            "url": "",
            "coauthors": ["Monika Leszczynska", "Jana Friedrichsen"]
        }]
    };

    let dataByMethod = {
        "Observational": [{
            "name": "Unconstitutional State of Emergency",
            "field": "Political Economy and Public Choice",
            "method": "Empirical (Observational)",
            "stage": "Published",
            "url": "https://www.journals.uchicago.edu/doi/abs/10.1086/718681?journalCode=jls",
            "coauthors": ["Christian Bjørnskov", "Stefan Voigt"]}
        ],
        "Observational (Text As Data)": [
            {
                "name": "Constitutional Comprehensibility and the Coordination of Citizens: A Test of the Weingast-Hypothesis Emergency",
                "field": "Political Economy and Public Choice",
                "method": "Observational (Text As Data)",
                "stage": "Published",
                "url": "https://lawreviewblog.uchicago.edu/2021/04/05/cv-gutmann-khesali-voigt",
                "coauthors": ["Jerg Gutmann", "Stefan Voigt"]
            }, 
            {
                "name": "Historic Moral Foundations Cast a Long Shadow: Insights From a Novel Folktale Dataset",
                "field": "Cultural Economics",
                "method": "Empirical (Observational-Text As Data)",
                "stage": "Work in Progress",
                "url": "",
                "coauthors": ["Stefan Voigt", "Nadia von Jacobi"]
            },
            {
                "name": "Once Upon Time: Introducing the Historical Values Survey",
                "field": "Cultural Economics",
                "method": "Empirical (Observational-Text As Data)",
                "stage": "Working Paper",
                "url": "",
                "coauthors": ["Stefan Voigt", "Nadia von Jacobi"]
            }
        ],
        "Experimental": [{
            "name": "Doing It Right, Doing It Wrong: The Effect of Expressive Voting",
            "field": "Political Economy and Public Choice",
            "method": "Experimental",
            "stage": "Work in Progress",
            "url": "",
            "coauthors": ["Yoan Hermstrüwer"]
        }, 
        {
            "name": "Terms of Contract as Mirror of Your Image",
            "field": "Contract Theory",
            "method": "Experimental",
            "stage": "Work in Progress",
            "url": "",
            "coauthors": ["Monika Leszczynska", "Jana Friedrichsen"]
        }]
    };

    let dataByStage = {
        "Work in Progress": [
            {
                "name": "Historic Moral Foundations Cast a Long Shadow: Insights From a Novel Folktale Dataset",
                "field": "Cultural Economics",
                "method": "Empirical (Observational-Text As Data)",
                "stage": "Work in Progress",
                "url": "",
                "coauthors": ["Stefan Voigt", "Nadia von Jacobi"]
            }, 
            {
                "name": "Doing It Right, Doing It Wrong: The Effect of Expressive Voting",
                "field": "Political Economy and Public Choice",
                "method": "Experimental",
                "stage": "Work in Progress",
                "url": "",
                "coauthors": ["Yoan Hermstrüwer"]
            }, 
            {
                "name": "Terms of Contract as Mirror of Your Image",
                "field": "Contract Theory",
                "method": "Experimental",
                "stage": "Work in Progress",
                "url": "",
                "coauthors": ["Monika Leszczynska", "Jana Friedrichsen"]
            }
        ],
        "Working Paper":[
            {
                "name": "Once Upon Time: Introducing the Historical Values Survey",
                "field": "Cultural Economics",
                "method": "Empirical (Observational-Text As Data)",
                "stage": "Working Paper",
                "url": "",
                "coauthors": ["Stefan Voigt", "Nadia von Jacobi"]
            }
        ],
        "Published": [
            {
                "name": "Unconstitutional State of Emergency",
                "field": "Political Economy and Public Choice",
                "method": "Empirical (Observational)",
                "stage": "Published",
                "url": "https://www.journals.uchicago.edu/doi/abs/10.1086/718681?journalCode=jls",
                "coauthors": ["Christian Bjørnskov", "Stefan Voigt"]
            },
            {
                "name": "Constitutional Comprehensibility and the Coordination of Citizens: A Test of the Weingast-Hypothesis Emergency",
                "field": "Political Economy and Public Choice",
                "method": "Observational (Text As Data)",
                "stage": "Published",
                "url": "https://lawreviewblog.uchicago.edu/2021/04/05/cv-gutmann-khesali-voigt",
                "coauthors": ["Jerg Gutmann", "Stefan Voigt"]
            }
        ]
    };

    let category = document.getElementById('categorySelect').value;

    if (category === 'field') {
        renderPapers(dataByField);
    } else if (category === 'method') {
        renderPapers(dataByMethod);
    } else if (category === 'stage') {
        renderPapers(dataByStage);
    }
}

function renderPapers(data) {
    let papersDiv = document.getElementById('papersList');
    papersDiv.innerHTML = '';  // Clear previous papers

    for (let category in data) {
        // Create a category header for each group
        let header = document.createElement('h2');
        header.innerText = category;
        papersDiv.appendChild(header);

        // List out the papers in this category
        data[category].forEach(paper => {
            let paperDiv = document.createElement('div');
            paperDiv.className = 'paper';

            // Create a hyperlink for the paper name
            let paperLink = document.createElement('a');
            paperLink.href = paper.url;
            paperLink.innerText = paper.name;
            paperLink.target = "_blank"; // Opens the link in a new tab
            paperLink.rel = "noopener noreferrer"; // Security best practice for links opening in new tabs
            paperDiv.appendChild(paperLink);

            // Append co-authors if they exist
            if (paper.coauthors && paper.coauthors.length > 0) {
                let coauthorsText = document.createElement('span');
                coauthorsText.innerText = ` (Co-authors: ${paper.coauthors.join(', ')})`;
                paperDiv.appendChild(coauthorsText);
            }

            // Create a span for the additional information
            let additionalInfoText = document.createElement('span');
            additionalInfoText.className = 'additional-info'; 

            switch (document.getElementById('categorySelect').value) {
                case 'field':
                    additionalInfoText.innerText = ` (Method: ${paper.method}, Stage: ${paper.stage})`;
                    break;
                case 'method':
                    additionalInfoText.innerText = ` (Field: ${paper.field}, Stage: ${paper.stage})`;
                    break;
                case 'stage':
                    additionalInfoText.innerText = ` (Field: ${paper.field}, Method: ${paper.method})`;
                    break;
            }

            paperDiv.appendChild(additionalInfoText);

            papersDiv.appendChild(paperDiv);
        });
    }
}

// Display papers by Field by default when the page loads
document.addEventListener('DOMContentLoaded', function() {
    applyFilter();
});