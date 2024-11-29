// Toggle help text visibility in Step 1
document.getElementById("help-icon").addEventListener("click", () => {
    const helpText = document.getElementById("help-text");
    // Alterna la visibilità del testo di aiuto
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Mostra il testo di aiuto
    } else {
        helpText.style.display = "none"; // Nasconde il testo di aiuto
    }
});

// Toggle help text visibility for Risk Name
document.getElementById("help-risk-name").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-risk-name");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Risk Description
document.getElementById("help-risk-description").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-risk-description");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Step 2: Risk Analysis (a)
document.getElementById("help-step2-risk-analysis").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-step2-risk-analysis");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Impact Description
document.getElementById("help-impact-description").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-impact-description");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Severity
document.getElementById("help-severity").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-severity");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Likelihood
document.getElementById("help-likelihood").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-likelihood");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Strategic Risk
document.getElementById("help-strategic-risk").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-strategic-risk");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Legal Risk
document.getElementById("help-legal-risk").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-legal-risk");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Operational Risk
document.getElementById("help-operational-risk").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-operational-risk");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Compliance Risk
document.getElementById("help-compliance-risk").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-compliance-risk");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Technical Risk
document.getElementById("help-technical-risk").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-technical-risk");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
// Toggle help text visibility for Step 4: Risk Evaluation
document.getElementById("help-risk-evaluation").addEventListener("click", () => {
    const helpText = document.getElementById("help-text-risk-evaluation");
    if (helpText.style.display === "none" || helpText.style.display === "") {
        helpText.style.display = "block"; // Show help text
    } else {
        helpText.style.display = "none"; // Hide help text
    }
});
document.getElementById("finish-btn").addEventListener("click", () => {
    // Clear the entire page content
    document.body.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; font-family: Arial, sans-serif; text-align: center;">
            <h1>Thank You!</h1>
            <p>Your Risk Assessment has been completed </p>
            <p>If you want to perform another risk assessment, go to the URL section at the top of your browser and press Enter.</p>
        </div>
    `;
});


document.addEventListener("DOMContentLoaded", () => {
    const steps = document.querySelectorAll(".step");
    const stepItems = document.querySelectorAll(".step-item");

    const riskData = {
        riskName: "",
        riskDescription: "",
        impactDescription: "",
        severity: "",
        likelihood: "",
        strategicRisk: "",
        legalRisk: "",
        operationalRisk: "",
        complianceRisk: "",
        technicalRisk: "",
    };
    // Inizializza i valori di default
    riskData.riskName = document.getElementById("riskName").value || "";
    riskData.riskDescription = document.getElementById("riskDescription").value || "";
    riskData.impactDescription = document.getElementById("impactDescription").value || "";
    riskData.severity = document.getElementById("severity").value || "";
    riskData.likelihood = document.getElementById("likelihood").value || "";
    riskData.strategicRisk = Array.from(document.querySelectorAll("#strategicRisk option:checked"))
        .map(opt => opt.value)
        .join(", ") || "";
    riskData.legalRisk = Array.from(document.querySelectorAll("#legalRisk option:checked"))
        .map(opt => opt.value)
        .join(", ") || "";
    riskData.operationalRisk = Array.from(document.querySelectorAll("#operationalRisk option:checked"))
        .map(opt => opt.value)
        .join(", ") || "";
    riskData.complianceRisk = Array.from(document.querySelectorAll("#complianceRisk option:checked"))
        .map(opt => opt.value)
        .join(", ") || "";
    riskData.technicalRisk = Array.from(document.querySelectorAll("#technicalRisk option:checked"))
        .map(opt => opt.value)
        .join(", ") || "";

    // Capture inputs from Step 1
    document.getElementById("riskName").addEventListener("input", (e) => {
        riskData.riskName = e.target.value;
    });
    document.getElementById("riskDescription").addEventListener("input", (e) => {
        riskData.riskDescription = e.target.value;
    });

    // Capture inputs from Step 2
    document.getElementById("impactDescription").addEventListener("input", (e) => {
        riskData.impactDescription = e.target.value;
    });
    document.getElementById("severity").addEventListener("change", (e) => {
        riskData.severity = e.target.value;
    });
    document.getElementById("likelihood").addEventListener("change", (e) => {
        riskData.likelihood = e.target.value;
    });

    // Capture inputs from Step 3 (multi-select fields)
    document.getElementById("strategicRisk").addEventListener("change", () => {
        riskData.strategicRisk = Array.from(
            document.querySelectorAll("#strategicRisk option:checked")
        ).map(opt => opt.textContent).join(", ");
    });

    document.getElementById("legalRisk").addEventListener("change", () => {
        riskData.legalRisk = Array.from(
            document.querySelectorAll("#legalRisk option:checked")
        ).map(opt => opt.textContent).join(", ");
    });

    document.getElementById("operationalRisk").addEventListener("change", () => {
        riskData.operationalRisk = Array.from(
            document.querySelectorAll("#operationalRisk option:checked")
        ).map(opt => opt.textContent).join(", ");
    });

    document.getElementById("complianceRisk").addEventListener("change", () => {
        riskData.complianceRisk = Array.from(
            document.querySelectorAll("#complianceRisk option:checked")
        ).map(opt => opt.textContent).join(", ");
    });

    document.getElementById("technicalRisk").addEventListener("change", () => {
        riskData.technicalRisk = Array.from(
            document.querySelectorAll("#technicalRisk option:checked")
        ).map(opt => opt.textContent).join(", ");
    });

    // Function to show steps
    function showStep(index) {
        steps.forEach((step, idx) => {
            step.classList.toggle("active", idx === index);
        });
        stepItems.forEach((item, idx) => {
            item.classList.toggle("active", idx === index);
        });
    }

    // Populate the summary table in Step 4
    const populateSummaryTable = () => {
        document.getElementById("summary-riskName").textContent = riskData.riskName;
        document.getElementById("summary-riskDescription").textContent = riskData.riskDescription;
        document.getElementById("summary-impactDescription").textContent = riskData.impactDescription;
        document.getElementById("summary-severity").textContent = riskData.severity;
        document.getElementById("summary-likelihood").textContent = riskData.likelihood;
        document.getElementById("summary-strategicRisk").textContent = riskData.strategicRisk;
        document.getElementById("summary-legalRisk").textContent = riskData.legalRisk;
        document.getElementById("summary-operationalRisk").textContent = riskData.operationalRisk;
        document.getElementById("summary-complianceRisk").textContent = riskData.complianceRisk;
        document.getElementById("summary-technicalRisk").textContent = riskData.technicalRisk;
    };


  //  const populateSummaryTable = () => {
  //      document.getElementById("summary-riskName").textContent = riskData.riskName || "N/A";
  //      document.getElementById("summary-riskDescription").textContent = riskData.riskDescription || "N/A";
  //      document.getElementById("summary-impactDescription").textContent = riskData.impactDescription || "N/A";
  //      document.getElementById("summary-severity").textContent = riskData.severity || "N/A";
  //      document.getElementById("summary-likelihood").textContent = riskData.likelihood || "N/A";
  //      document.getElementById("summary-strategicRisk").textContent = riskData.strategicRisk || "N/A";
  //      document.getElementById("summary-legalRisk").textContent = riskData.legalRisk || "N/A";
  //      document.getElementById("summary-operationalRisk").textContent = riskData.operationalRisk || "N/A";
  //      document.getElementById("summary-complianceRisk").textContent = riskData.complianceRisk || "N/A";
  //      document.getElementById("summary-technicalRisk").textContent = riskData.technicalRisk || "N/A";
  //  };

    // Add event listeners for navigation buttons
    stepItems.forEach((item, index) => {
        item.addEventListener("click", () => showStep(index));
    });

    document.querySelectorAll(".next-btn").forEach((btn, index) => {
        btn.addEventListener("click", () => {
            showStep(index + 1);
            if (index === 2) populateSummaryTable(); // Populate table on Step 4
        });
    });

    document.querySelectorAll(".prev-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const currentStep = document.querySelector(".step.active");
            const currentIndex = Array.from(steps).indexOf(currentStep);
            showStep(currentIndex - 1);
        });
    });

    document.getElementById("save-btn").addEventListener("click", () => {
        // Inizializza il contenuto del file
        let content = "RISK ASSESSMENT\n\n";
    
        // Aggiungi i dati della tabella nello Step 4
        content += `Risk Name: ${document.getElementById("summary-riskName").textContent || ""}\n\n`;
        content += `Risk Description: ${document.getElementById("summary-riskDescription").textContent || ""}\n\n`;
        content += `Impact Description: ${document.getElementById("summary-impactDescription").textContent || ""}\n\n`;
        content += `Severity: ${document.getElementById("summary-severity").textContent || ""}\n\n`;
        content += `Likelihood: ${document.getElementById("summary-likelihood").textContent || ""}\n\n`;
        content += `Strategic Risk: ${document.getElementById("summary-strategicRisk").textContent || ""}\n\n`;
        content += `Legal Risk: ${document.getElementById("summary-legalRisk").textContent || ""}\n\n`;
        content += `Operational Risk: ${document.getElementById("summary-operationalRisk").textContent || ""}\n\n`;
        content += `Compliance Risk: ${document.getElementById("summary-complianceRisk").textContent || ""}\n\n`;
        content += `Technical Risk: ${document.getElementById("summary-technicalRisk").textContent || ""}\n\n`;
        content += `Decision: ${document.getElementById("decision").value || ""}\n`;
    
        // Crea il file .txt
        const blob = new Blob([content], { type: "text/plain" });
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "Risk_Assessment.txt"; // Nome del file
        a.click();
    });

    // Save to File functionality
    //const saveButton = document.getElementById("save-btn");
    //if (saveButton) {
    //    saveButton.addEventListener("click", () => {
    //        const content = JSON.stringify(riskData, null, 2);
    //        const blob = new Blob([content], { type: "application/json" });
    //        const a = document.createElement("a");
    //        a.href = URL.createObjectURL(blob);
    //        a.download = "Risk_Assessment.json";
    //        a.click();
    //    });
    //}

    // Initialize to show the first step
    showStep(0);
});