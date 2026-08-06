import { NextResponse } from "next/server";
import OpenAI from "openai";

export interface DecisionAnalysis {
  id: string;
  query: string;
  category: "documents" | "scams" | "buying" | "renting" | "investing" | "general";
  executiveSummary: string;
  keyRisks: string[];
  verificationSteps: Array<{ stepNumber: number; title: string; detail: string }>;
  suggestedQuestions: string[];
  disclaimer: string;
  timestamp: string;
}

// Fallback intelligence analyzer matching domain knowledge rules from knowledge-base/*.md
function analyzeQueryWithDomainEngine(userQuery: string): DecisionAnalysis {
  const queryLower = userQuery.toLowerCase();
  const now = new Date().toISOString();

  if (queryLower.includes("governor") || queryLower.includes("consent")) {
    return {
      id: `analysis-${Date.now()}`,
      query: userQuery,
      category: "documents",
      executiveSummary:
        "Governor's Consent is mandatory legal authorization required under Section 22 of the Land Use Act of 1978 for any legal transfer or assignment of land ownership. Without Governor's Consent, a land transaction remains inchoate (incomplete under state law) and cannot be legally registered at the State Land Registry.",
      keyRisks: [
        "Unperfected Title Risk: Holding an unconsented Deed of Assignment leaves your ownership legally incomplete and vulnerable to competing claims.",
        "Mortgage Restrictions: Financial institutions will not accept land without Governor's Consent as loan collateral.",
        "Double-Sale Liability: A seller can fraudulently re-assign land to another buyer if consent is not perfected and registered."
      ],
      verificationSteps: [
        {
          stepNumber: 1,
          title: "Root of Title Audit",
          detail: "Verify that the seller holds a valid Certificate of Occupancy (C of O) or Gazette before executing the Deed of Assignment."
        },
        {
          stepNumber: 2,
          title: "State Land Registry Search",
          detail: "Conduct an official search at the State Ministry of Lands (e.g. Alausa, Ikeja for Lagos) to confirm no prior mortgages or legal caveats exist."
        },
        {
          stepNumber: 3,
          title: "Application & Assessment Payment",
          detail: "Submit Deed of Assignment, Charted Survey Plan, tax clearance certificates, and pay required state perfection fees."
        }
      ],
      suggestedQuestions: [
        "How long does Governor's Consent take to process in Lagos State?",
        "What is the difference between Governor's Consent and a C of O?",
        "What are the official government fees for perfecting Governor's Consent?"
      ],
      disclaimer: "This analysis is for educational and guidance purposes only. Always engage a registered property lawyer and licensed surveyor before making financial commitments.",
      timestamp: now
    };
  }

  if (queryLower.includes("scam") || queryLower.includes("red flag") || queryLower.includes("fake") || queryLower.includes("agent")) {
    return {
      id: `analysis-${Date.now()}`,
      query: userQuery,
      category: "scams",
      executiveSummary:
        "Property fraud often relies on high-pressure sales tactics, unverified land title claims, unregistered agents, or selling land located within designated government acquisition corridors. A strict verification protocol must precede any monetary payment.",
      keyRisks: [
        "Unregistered Agents: Transferring funds to personal accounts of unverified real estate brokers without REDAN/ESVARBON credentials.",
        "Government Acquisition Corridors: Purchasing land designated for public infrastructure (coastal roads, rail, or airport buffers) where titles cannot be granted.",
        "Phantom/Double Allocations: Paying commitment deposits based solely on estate layout drawings without physical beacon coordinate confirmation."
      ],
      verificationSteps: [
        {
          stepNumber: 1,
          title: "Physical Survey Charting",
          detail: "Engage a registered surveyor to record GPS coordinates on-site and chart them at the Surveyor General's Office to check acquisition status."
        },
        {
          stepNumber: 2,
          title: "Identity & Legal Search",
          detail: "Verify the seller's legal identity or developer registration with CAC and REDAN. Request verified legal proof of authority to sell."
        },
        {
          stepNumber: 3,
          title: "Escrow & Account Protection",
          detail: "Never transfer booking deposits directly to individual agent accounts; ensure payments are tied to legal escrow agreements."
        }
      ],
      suggestedQuestions: [
        "How do I verify if land is under global acquisition or excision?",
        "What steps should I take if an agent refuses to provide survey coordinates?",
        "What documents prove a developer legally owns an estate layout?"
      ],
      disclaimer: "This analysis is for educational and guidance purposes only. Always engage a registered property lawyer and licensed surveyor before making financial commitments.",
      timestamp: now
    };
  }

  if (queryLower.includes("rent") || queryLower.includes("tenant") || queryLower.includes("notice") || queryLower.includes("lease")) {
    return {
      id: `analysis-${Date.now()}`,
      query: userQuery,
      category: "renting",
      executiveSummary:
        "Tenancy agreements in Nigeria are regulated by statutory state laws (such as the Lagos State Tenancy Law 2011). Statutory quit notice periods are strictly enforced based on tenancy duration unless a valid written lease agreement states otherwise.",
      keyRisks: [
        "Illegal Eviction Threats: Landlords cannot forcibly eject tenants, remove roof sheets, or lock gates without a valid court notice (Notice of Owner's Intention to Apply to Recover Possession).",
        "Unwritten Terms Hazard: Relying on verbal agreements for rent review intervals or maintenance responsibility split.",
        "Extreme Advance Rent Demands: Requesting more than 1 year advance rent in advance for residential tenancies violates Lagos Tenancy Law Section 4."
      ],
      verificationSteps: [
        {
          stepNumber: 1,
          title: "Tenancy Agreement Review",
          detail: "Examine clause details regarding notice periods, caution fee refund terms, and utility bill clearance terms."
        },
        {
          stepNumber: 2,
          title: "Inventory & Condition Report",
          detail: "Document existing property fixtures, wall conditions, and meter readings with photographs before taking possession."
        },
        {
          stepNumber: 3,
          title: "Official Receipt Request",
          detail: "Ensure written receipts are issued for rent, agreement fee, commission, and caution deposit signed by the property owner."
        }
      ],
      suggestedQuestions: [
        "What is the legal notice period for a yearly tenant under Lagos state law?",
        "Can a landlord increase rent arbitrarily during an active tenancy term?",
        "How do I get my caution deposit back when moving out?"
      ],
      disclaimer: "This analysis is for guidance purposes only. Consult a qualified property lawyer for specific landlord-tenant disputes.",
      timestamp: now
    };
  }

  if (queryLower.includes("epe") || queryLower.includes("lekki") || queryLower.includes("abuja") || queryLower.includes("invest")) {
    return {
      id: `analysis-${Date.now()}`,
      query: userQuery,
      category: "investing",
      executiveSummary:
        "Evaluating property investment across high-growth corridors (such as Lekki Phase 1, Epe industrial corridor, or Abuja Phase 1) requires analyzing infrastructure timeline, title perfection status, liquidity, and net rental yields after maintenance costs.",
      keyRisks: [
        "Infrastructure Delay Risk: Projected appreciation timing relying on uncompleted federal/state infrastructure projects.",
        "Title Perfection Cost Overshoot: Failing to factor in Governor's Consent, charting, and registration costs into capital expenditure.",
        "Over-Leveraging on Shortlets: Assuming 80%+ occupancy without accounting for seasonal vacancy and facility management fees."
      ],
      verificationSteps: [
        {
          stepNumber: 1,
          title: "Title & Gazette Verification",
          detail: "Confirm whether land has an Gazetted Excision or full C of O to avoid government acquisition claims during development."
        },
        {
          stepNumber: 2,
          title: "Comparative Market Analysis",
          detail: "Compare historical price growth per square meter over 3-5 years against current asking prices in neighboring layouts."
        },
        {
          stepNumber: 3,
          title: "Soil & Flood Level Assessment",
          detail: "Conduct preliminary soil tests and check elevation maps to estimate foundation and drainage construction budgets."
        }
      ],
      suggestedQuestions: [
        "What is the average rental yield for apartments in Lekki vs Ikeja?",
        "What is the difference between Agricultural and Residential zoning in Epe?",
        "How do I calculate net yield after property management fees?"
      ],
      disclaimer: "This guidance does not constitute financial or investment advice. Conduct independent legal due diligence before investing.",
      timestamp: now
    };
  }

  // General Default Decision Analysis
  return {
    id: `analysis-${Date.now()}`,
    query: userQuery,
    category: "general",
    executiveSummary:
      `Analyzing property question: "${userQuery}". Property decisions require verifying document validity, checking physical survey coordinates, confirming identity of selling parties, and calculating total cost of ownership including legal perfection fees.`,
    keyRisks: [
      "Unverified Title Claims: Relying on verbal assurances regarding land ownership status.",
      "Hidden Perfection Costs: Overlooking legal, survey, and state tax fees which can add 10-15% to purchase prices.",
      "Encroachment Hazards: Failing to physically inspect boundaries and verify beacons on site."
    ],
    verificationSteps: [
      {
        stepNumber: 1,
        title: "Title & Document Search",
        detail: "Obtain clean copies of all title documents (C of O, Deed, Survey Plan) for legal verification."
      },
      {
        stepNumber: 2,
        title: "Physical Site & Boundary Charting",
        detail: "Visit the site with a registered surveyor to chart coordinates and verify boundaries."
      },
      {
        stepNumber: 3,
        title: "Legal Contract Execution",
        detail: "Draft formal contracts with a property lawyer with explicit representations and warranties."
      }
    ],
    suggestedQuestions: [
      "What legal documents must a seller provide before receiving payment?",
      "How do I verify if land is under government acquisition?",
      "What is the cost of drafting a Deed of Assignment?"
    ],
    disclaimer: "This analysis is for educational and guidance purposes only. Always engage a registered property lawyer and licensed surveyor before making financial commitments.",
    timestamp: now
  };
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message prompt is required." }, { status: 400 });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    if (apiKey) {
      try {
        const openai = new OpenAI({ apiKey });
        const systemPrompt = `You are Your Property Padi AI, an objective, professional, and friendly Property Intelligence Advisor for Nigeria and Africa.
Follow the 7-step decision framework:
1. Understand Goal
2. Executive Summary in simple English (no heavy legal jargon)
3. Key Risks & Hazards to Avoid (3 bullet points)
4. Required Verification Steps (3 step-by-step numbered points)
5. Next Action Recommendation & Advice

Output your response STRICTLY as a valid JSON object matching this schema:
{
  "category": "documents" | "scams" | "buying" | "renting" | "investing" | "general",
  "executiveSummary": "string",
  "keyRisks": ["risk 1", "risk 2", "risk 3"],
  "verificationSteps": [
    { "stepNumber": 1, "title": "string", "detail": "string" },
    { "stepNumber": 2, "title": "string", "detail": "string" },
    { "stepNumber": 3, "title": "string", "detail": "string" }
  ],
  "suggestedQuestions": ["q1", "q2", "q3"],
  "disclaimer": "This analysis is for educational and guidance purposes only..."
}`;

        const completion = await openai.chat.completions.create({
          model: "gpt-4o-mini",
          response_format: { type: "json_object" },
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message }
          ],
          temperature: 0.2
        });

        const content = completion.choices[0]?.message?.content;
        if (content) {
          const parsed = JSON.parse(content);
          const responseAnalysis: DecisionAnalysis = {
            id: `analysis-${Date.now()}`,
            query: message,
            category: parsed.category || "general",
            executiveSummary: parsed.executiveSummary || "",
            keyRisks: parsed.keyRisks || [],
            verificationSteps: parsed.verificationSteps || [],
            suggestedQuestions: parsed.suggestedQuestions || [],
            disclaimer: parsed.disclaimer || "This analysis is for educational and guidance purposes only.",
            timestamp: new Date().toISOString()
          };
          return NextResponse.json(responseAnalysis);
        }
      } catch (err) {
        console.warn("OpenAI API call failed or unconfigured, using Domain Engine fallback:", err);
      }
    }

    // Domain Engine Fallback
    const domainAnalysis = analyzeQueryWithDomainEngine(message);
    return NextResponse.json(domainAnalysis);
  } catch (error) {
    console.error("Error processing ask request:", error);
    return NextResponse.json({ error: "Failed to analyze decision query." }, { status: 500 });
  }
}
