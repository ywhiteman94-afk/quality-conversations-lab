/* V3 03C: three independent forms; stable item/option identities and answer-specific feedback. */
const ASSESSMENT_BANK = [
  [
    {
      "title": "Identify the Observable Gap",
      "skill": "Evidence",
      "scene": "A customer is checking the arrangements for a service appointment.",
      "prompt": "Which observation should guide the Team Leader’s coaching?",
      "options": {
        "A": "The Representative could reinforce the confirmation message by explaining when it will be sent.",
        "B": "The Representative could summarize the appointment date and check the contact details before closing.",
        "C": "The Representative confirmed the date but did not answer whether the customer needed to be home all afternoon."
      },
      "correct": "C",
      "feedback": {
        "A": {
          "heading": "Focus on the question asked",
          "body": "A confirmation message may be useful, but the customer asked about availability, not message timing.",
          "takeaway": "Prioritize the unanswered customer question."
        },
        "B": {
          "heading": "Separate useful steps from evidence",
          "body": "A recap and contact check can be useful, but neither addresses the customer’s availability question.",
          "takeaway": "Identify the observed gap before prescribing a solution."
        },
        "C": {
          "heading": "Evidence-based observation",
          "body": "The final reply repeats the date rather than addressing the customer’s availability question.",
          "takeaway": "Coach the specific missed behavior without inferring intent."
        }
      },
      "ids": {
        "A": "a-evidence-a",
        "B": "a-evidence-b",
        "C": "a-evidence-c"
      },
      "correctId": "a-evidence-c",
      "transcript": [
        [
          "Representative",
          "Your service appointment is scheduled for Friday. You’ll receive a confirmation message."
        ],
        [
          "Customer",
          "Do I need to be home the whole afternoon?"
        ],
        [
          "Representative",
          "Your appointment is confirmed for Friday. Thank you for calling!"
        ]
      ]
    },
    {
      "title": "Respond to a Coaching Concern",
      "skill": "Adaptation",
      "scene": "A Representative receives a review noting that a customer’s refund deadline was left unclear. The Representative explains that the guidance screen showed two different timeframes.",
      "prompt": "What should the Team Leader do next?",
      "options": {
        "A": "Verify the current guidance together, rehearse a response for uncertain deadlines, and flag the conflicting information.",
        "B": "Escalate the conflicting guidance and schedule a coaching conversation after the information has been corrected.",
        "C": "Provide the verified deadline and ask the Representative to review the guidance before taking future calls."
      },
      "correct": "A",
      "feedback": {
        "A": {
          "heading": "Address the barrier and the behavior",
          "body": "This verifies the source, offers practice and addresses the underlying information barrier.",
          "takeaway": "Pair reliable guidance with practical rehearsal."
        },
        "B": {
          "heading": "Escalation is useful but incomplete",
          "body": "Escalation may resolve the information problem, but delaying coaching leaves the Representative without a practiced response.",
          "takeaway": "Support the immediate job task while resolving the barrier."
        },
        "C": {
          "heading": "Information is not application",
          "body": "A verified deadline is helpful; independent review alone does not show whether the Representative can respond when guidance is unclear.",
          "takeaway": "Rehearse how to verify uncertain information."
        }
      },
      "ids": {
        "A": "a-adaptation-a",
        "B": "a-adaptation-b",
        "C": "a-adaptation-c"
      },
      "correctId": "a-adaptation-a",
      "quote": "I saw two different refund timeframes in the guidance. I wasn’t sure which one was current."
    },
    {
      "title": "Agree on a Practical Improvement Plan",
      "skill": "Application",
      "scene": "A Representative successfully helps a customer activate a replacement card. The customer confirms activation and asks no other questions, but the Representative repeats every instruction. The Team Leader wants to reduce unnecessary repetition without sacrificing quality.",
      "prompt": "Which coaching plan best supports a concise, complete close?",
      "options": {
        "A": "Explain why efficient calls matter, provide a closing script, and ask the Representative to use it on future calls.",
        "B": "Review the call together, practice a focused closing question, and check three future eligible calls for that behavior.",
        "C": "Share examples of efficient calls, ask the Representative to identify useful closing techniques, and review her notes."
      },
      "correct": "B",
      "feedback": {
        "A": {
          "heading": "A script is a useful starting point",
          "body": "A script offers guidance but does not establish whether the Representative can use it appropriately.",
          "takeaway": "Include practice and observation of future calls."
        },
        "B": {
          "heading": "Make improvement observable",
          "body": "Review, rehearsal and a specific sample of future calls connect the coaching goal to job performance.",
          "takeaway": "Practice the behavior and check evidence of its use."
        },
        "C": {
          "heading": "Connect examples to performance",
          "body": "Analyzing examples builds understanding, but reviewing notes does not establish whether the closing behavior transfers.",
          "takeaway": "Ask for practice and measure the behavior in context."
        }
      },
      "ids": {
        "A": "a-application-a",
        "B": "a-application-b",
        "C": "a-application-c"
      },
      "correctId": "a-application-b"
    }
  ],
  [
    {
      "title": "Find the Missing Information",
      "skill": "Evidence",
      "scene": "A customer is asking about a replacement device delivery.",
      "prompt": "Which observation is supported by the call excerpt?",
      "options": {
        "A": "The Representative gave the delivery estimate but did not address the customer’s question about a signature.",
        "B": "The Representative could improve the delivery estimate by offering a more specific arrival window.",
        "C": "The Representative could strengthen the closing by summarizing the replacement order and delivery address."
      },
      "correct": "A",
      "feedback": {
        "A": {
          "heading": "Observe the specific gap",
          "body": "The delivery estimate was provided, but the signature question was not answered.",
          "takeaway": "Describe the specific behavior that needs coaching."
        },
        "B": {
          "heading": "Avoid replacing the customer’s question",
          "body": "A narrower delivery window may be useful, but it is not the customer’s stated concern.",
          "takeaway": "Focus on what the customer actually asked."
        },
        "C": {
          "heading": "Prioritize the relevant omission",
          "body": "A summary can help, but the excerpt shows an unanswered signature question rather than an address issue.",
          "takeaway": "Use the transcript to identify the most relevant gap."
        }
      },
      "ids": {
        "A": "b-evidence-a",
        "B": "b-evidence-b",
        "C": "b-evidence-c"
      },
      "correctId": "b-evidence-a",
      "transcript": [
        [
          "Representative",
          "Your replacement should arrive in three business days."
        ],
        [
          "Customer",
          "Will someone need to sign for it?"
        ],
        [
          "Representative",
          "It should arrive in three business days. Thanks for calling."
        ]
      ]
    },
    {
      "title": "Coach Through Uncertainty",
      "skill": "Adaptation",
      "scene": "A Representative is unsure how to explain a billing adjustment when the policy is unfamiliar.",
      "prompt": "Which response best addresses the Representative’s uncertainty?",
      "options": {
        "A": "Provide the current adjustment guidance, ask her to summarize the rules, and revisit the topic at the next meeting.",
        "B": "Arrange a policy refresher, share the adjustment reference, and ask her to confirm when she has completed it.",
        "C": "Explore the missing information, locate approved guidance together, and rehearse explaining or verifying an adjustment."
      },
      "correct": "C",
      "feedback": {
        "A": {
          "heading": "Move beyond recall",
          "body": "Summarizing the rules checks understanding but does not necessarily build a reliable response to unfamiliar questions.",
          "takeaway": "Add a practice opportunity for verification."
        },
        "B": {
          "heading": "Completion is not application",
          "body": "A refresher may help, but a completion check alone does not establish whether the Representative can handle uncertainty.",
          "takeaway": "Investigate the barrier and practice the actual task."
        },
        "C": {
          "heading": "Collaborative solution",
          "body": "You identify the barrier, consult an approved source and rehearse a response that avoids guessing.",
          "takeaway": "Use guided practice to build a reliable workplace behavior."
        }
      },
      "ids": {
        "A": "b-adaptation-a",
        "B": "b-adaptation-b",
        "C": "b-adaptation-c"
      },
      "correctId": "b-adaptation-c",
      "quote": "I wasn’t sure where to find the current adjustment rules."
    },
    {
      "title": "Plan the Next Coaching Check-In",
      "skill": "Application",
      "scene": "A customer confirms their delivery address and the updated order. The Representative still asks several unrelated closing questions. The Team Leader wants to reinforce a concise but complete close.",
      "prompt": "Which plan best balances call efficiency and customer understanding?",
      "options": {
        "A": "Share a concise closing checklist, set a call-duration goal, and review the Representative’s average handling time.",
        "B": "Practice a relevant remaining-needs question and review three future eligible calls for a focused, complete closing.",
        "C": "Compare several strong closing examples, ask the Representative to choose a technique, and review her training notes."
      },
      "correct": "B",
      "feedback": {
        "A": {
          "heading": "Measure the behavior as well as duration",
          "body": "A checklist and handling-time target support efficiency, but duration alone does not demonstrate a complete closing.",
          "takeaway": "Review observable customer-service behavior."
        },
        "B": {
          "heading": "Actionable follow-up",
          "body": "A specific practice task and a concrete sample of future calls allow the Team Leader to review the desired behavior.",
          "takeaway": "Define the behavior, practice it and check its application."
        },
        "C": {
          "heading": "Examples need application",
          "body": "Reviewing examples and notes can support learning but does not show that the technique is used in calls.",
          "takeaway": "Observe performance after practice."
        }
      },
      "ids": {
        "A": "b-application-a",
        "B": "b-application-b",
        "C": "b-application-c"
      },
      "correctId": "b-application-b"
    }
  ],
  [
    {
      "title": "Identify the Coaching Opportunity",
      "skill": "Evidence",
      "scene": "A customer calls to update account notification preferences.",
      "prompt": "Which quality observation should the Team Leader prioritize?",
      "options": {
        "A": "The Representative could reinforce the email update by outlining the types of routine account notifications.",
        "B": "The Representative saved the preference update but did not answer whether security alerts would still arrive by text.",
        "C": "The Representative could strengthen the close by recapping the saved preference and confirmed email address."
      },
      "correct": "B",
      "feedback": {
        "A": {
          "heading": "Keep the customer’s question central",
          "body": "Routine notifications may be relevant, but the customer specifically asked about security alerts.",
          "takeaway": "Prioritize the unanswered question."
        },
        "B": {
          "heading": "Identify the observable omission",
          "body": "The transcript shows that the security-alert question was not addressed; it does not establish the actual alert settings.",
          "takeaway": "Coach a direct answer or verification step without assuming policy."
        },
        "C": {
          "heading": "A recap is not an answer",
          "body": "Repeating the preference update would not resolve the specific question about security alerts.",
          "takeaway": "Identify what information remains unclear."
        }
      },
      "ids": {
        "A": "c-evidence-a",
        "B": "c-evidence-b",
        "C": "c-evidence-c"
      },
      "correctId": "c-evidence-b",
      "transcript": [
        [
          "Representative",
          "Your notification preferences have been updated to email."
        ],
        [
          "Customer",
          "Will I still receive text messages about suspicious account activity?"
        ],
        [
          "Representative",
          "Your email address is confirmed, and your preferences are saved. Thank you for calling."
        ]
      ]
    },
    {
      "title": "Resolve Conflicting Procedures",
      "skill": "Adaptation",
      "scene": "A Representative finds two conflicting procedures in the knowledge base and is unsure which one is approved.",
      "prompt": "What should the Team Leader do next?",
      "options": {
        "A": "Confirm the approved procedure together, rehearse its application, and report the conflicting knowledge-base guidance.",
        "B": "Provide the verified procedure, ask the Representative to review it independently, and check her understanding later.",
        "C": "Review both procedures together, ask the Representative to identify the most applicable one, and discuss her reasoning."
      },
      "correct": "A",
      "feedback": {
        "A": {
          "heading": "Resolve the information barrier",
          "body": "Verifying the approved source, practicing and reporting the discrepancy address both the individual task and the shared barrier.",
          "takeaway": "Resolve unreliable guidance and verify application."
        },
        "B": {
          "heading": "Information is not application",
          "body": "Providing accurate guidance helps, but independent review does not establish correct application or resolve the conflicting entry.",
          "takeaway": "Practice applying the approved procedure and review performance."
        },
        "C": {
          "heading": "Collaboration needs reliable guidance",
          "body": "Reviewing both procedures invites participation, but asking the Representative to choose does not establish which one is approved.",
          "takeaway": "Verify the source before practicing or reinforcing the procedure."
        }
      },
      "ids": {
        "A": "c-adaptation-a",
        "B": "c-adaptation-b",
        "C": "c-adaptation-c"
      },
      "correctId": "c-adaptation-a",
      "quote": "I found two different procedures and I’m not sure which one is current."
    },
    {
      "title": "Create a Practical Coaching Plan",
      "skill": "Application",
      "scene": "A Representative correctly processes a service cancellation but does not explain when the customer’s final bill will arrive. The Team Leader has reviewed the interaction and demonstrated an improved response.",
      "prompt": "Which plan best supports sustained performance improvement?",
      "options": {
        "A": "Provide a final-bill guide, ask the Representative to review it before cancellation calls, and discuss any questions next week.",
        "B": "Assign a refresher on cancellation procedures, review completion results, and ask the Representative to explain the final-bill steps.",
        "C": "Practice explaining final-bill expectations, give feedback, and review three future eligible cancellation calls for that behavior."
      },
      "correct": "C",
      "feedback": {
        "A": {
          "heading": "Make reference materials actionable",
          "body": "A guide and discussion are useful, but they do not establish that the Representative can explain final-bill expectations in a call.",
          "takeaway": "Add rehearsal and an observable follow-up."
        },
        "B": {
          "heading": "Check application, not just completion",
          "body": "Completion and explanation show learning activity and recall, but do not establish consistent application in customer interactions.",
          "takeaway": "Review future performance against the desired behavior."
        },
        "C": {
          "heading": "Practice and measure transfer",
          "body": "Targeted rehearsal, feedback and a specific future call sample support observable performance improvement.",
          "takeaway": "Practice the behavior and review evidence of its application."
        }
      },
      "ids": {
        "A": "c-application-a",
        "B": "c-application-b",
        "C": "c-application-c"
      },
      "correctId": "c-application-c"
    }
  ]
];
