/* =============================================================
   logs.js — Edit this file to add, remove, or modify bug logs.
   Each object in the `logs` array is one diary entry.
   ============================================================= */

const logs = [
  {
    id: "cout-vs-count",
    title: "The Day 'cout' Became 'count'",
    emoji: "👓",
    date: "2023-07-01",
    tags: ["C++", "Beginner", "Typo"],
    teaser:
      "A simple hello world program. One typo. One very long lab session.",
    story: `It was one of my first programming classes.

The code was simple. A basic hello world. Everyone else had already finished and left. I was still sitting there, staring at the screen, trying to figure out what went wrong.

Finally, the teacher came over, looked at my code for a few seconds, and pointed it out.

Not a logic error. Not syntax complexity.

Just one word: "count" instead of "cout".

That was it.`,
    fix: `Lesson learned: Sometimes the hardest bugs are just one extra letter.`,
    status: "resolved",
  },

  {
  id: "browser-mystery",
  title: "When the Browser Was the Problem",
  emoji: "🌐",
  date: "2023-08-10",
  tags: ["Web", "Browser", "Beginner"],
  teaser:
    "Everything looked correct. The feature refused to appear. Switching the browser fixed it.",
  story: `I was working on a small website.

Everything seemed correct in the code. The feature I was testing refused to appear, no matter what I tried.

After a while, someone suggested trying a different browser. I did. It worked instantly.

I don’t remember the exact feature anymore, but I remember the relief and disbelief at how simple the fix was.`,
  fix: `Lesson learned: Sometimes the issue isn’t your code. It’s the environment around it.`,
  status: "resolved",
},

  {
    id: "string-input-c",
    title: "The String That Refused to Be Read",
    emoji: "🔤",
    date: "2023-09-02",
    tags: ["C", "Input", "Confusion"],
    teaser:
      "The input just wouldn’t get accepted. The reason was hidden in something I thought was harmless.",
    story: `I was working with strings in C.

The input wasn’t getting accepted properly. The program looked fine. The logic was fine. Still, something wasn’t working.

After going in circles for a while, I realized the issue was related to how input buffering works.

A newline character I had used earlier was interfering with the next input.

Something so small, but it completely blocked the program.`,
    fix: `Lesson learned: In low-level languages, even invisible characters can cause visible problems.`,
    status: "resolved",
  },

  {
    id: "nested-conditions-exam",
    title: "The Answer I Was Sure About",
    emoji: "📝",
    date: "2023-10-15",
    tags: ["C", "Logic", "Exam"],
    teaser:
      "The logic made sense. The answer felt right. The marks said otherwise.",
    story: `It was an exam question based on nested conditionals.

I solved it confidently. Everything seemed correct. There was no doubt while writing the answer.

Later, when the results came, it was wrong.

No dramatic bug. Just a reminder that being confident and being correct are not always the same thing.`,
    fix: `Lesson learned: Always re-check logic, especially when you feel 100% sure.`,
    status: "resolved",
  },

  {
    id: "competitive-coding-realization",
    title: "The 5-Day Realization",
    emoji: "⏳",
    date: "2023-11-01",
    tags: ["Competitive Programming", "Learning"],
    teaser:
      "Spent days trying to write everything from scratch. Turns out, that wasn’t required.",
    story: `When I started solving problems online, I approached them like full programs.

I was writing everything — structure, setup, everything.

It took me five days to realize that I didn’t need to do all of that. The platform already handled most of it.

Five days. One realization.`,
    fix: `Lesson learned: Before solving a problem, understand the platform you're solving it on.`,
    status: "resolved",
  },

  {
    id: "regex-confusion",
    title: "Regex: Useful, Powerful, and Confusing",
    emoji: "🧩",
    date: "2024-01-12",
    tags: ["Regex", "Web", "Confusion"],
    teaser:
      "It worked. Eventually. Understanding it is still a work in progress.",
    story: `I used regular expressions while building a project.

Getting them to work took time. A lot of time.

Even after writing the expressions and making them work, looking back at them later felt like reading something written by someone else.

They worked. That’s the only part I was sure about.`,
    fix: `Lesson learned: Some tools take time. Understanding comes after repetition.`,
    status: "wip",
  },

  {
    id: "error-was-the-output",
    title: "When the Error Was the Answer",
    emoji: "⚠️",
    date: "2024-02-05",
    tags: ["DBMS", "Assignment"],
    teaser:
      "I was trying to fix an error that was actually the correct output.",
    story: `We were given an assignment.

The program displayed an error message. I assumed something was wrong and started trying to fix it.

After some time, the teacher came and asked what I was doing.

The output was correct.

The error message was intentional.

I had been debugging the correct answer.

In my defense, I wasn’t feeling well that day. But still, that moment stayed.`,
    fix: `Lesson learned: Understand the expected output before trying to fix it.`,
    status: "resolved",
  },

  {
    id: "sql-order-confusion",
    title: "WHERE, GROUP BY, HAVING… In What Order?",
    emoji: "🧠",
    date: "2024-02-20",
    tags: ["SQL", "Theory"],
    teaser:
      "Even after learning it multiple times, the doubt still appears during exams.",
    story: `SQL queries made sense while studying.

But during exams, one doubt always came back:

Which comes first?

WHERE? GROUP BY? HAVING?

Even after revising it multiple times, that moment of hesitation never fully disappeared.`,
    fix: `Lesson learned: Some concepts need repeated practice, not just understanding.`,
    status: "wip",
  },

  {
    id: "syntax-typo-written",
    title: "Yes, You Can Make Typos on Paper Too",
    emoji: "✍️",
    date: "2024-03-10",
    tags: ["PHP", "Exam"],
    teaser:
      "Knew the syntax. Still wrote it wrong.",
    story: `It was a written exam.

I knew the syntax. I had practiced it.

Somehow, while writing, I got it wrong.

Not because I didn’t know it. Just because mistakes don’t always need a reason.`,
    fix: `Lesson learned: Knowing something and writing it correctly are two different skills.`,
    status: "resolved",
  },

  {
  id: "namespace-missing",
  title: "The Missing Line in C++",
  emoji: "📌",
  date: "2024-03-25",
  tags: ["C++", "Exam"],
  teaser:
    "Everything was correct… except one very important line.",
  story: `In a hurry during an exam, I wrote the entire program.

Logic was fine. Syntax was fine.

One small but crucial line was missing:

using namespace std;

I forgot it, and the code wouldn’t compile.`,
  fix: `Lesson learned: Small lines can carry big weight. Always check the basics.`,
  status: "resolved",
},

  {
    id: "css-color-mystery",
    title: "The Same Color That Wasn’t the Same",
    emoji: "🎨",
    date: "2024-04-12",
    tags: ["CSS", "UI"],
    teaser:
      "Same code. Same website. Different colors on different screens.",
    story: `We built a website together.

Opened it on two laptops.

Same code. Different colors.

Turns out display settings (Night Light) were involved. Even after adjusting them, the colors still looked slightly different.

That was the moment I realized frontend isn’t always exact.`,
    fix: `Lesson learned: Visual output can depend on more than just your code.`,
    status: "open",
  },

  {
    id: "syntax-mixup",
    title: "When Languages Start Mixing",
    emoji: "🔀",
    date: "2024-05-01",
    tags: ["Programming", "Syntax"],
    teaser:
      "The logic was correct. The syntax belonged to a different language.",
    story: `While learning multiple languages, things started blending.

I would write something that made perfect sense in my head.

Just not in that language.

The logic was right. The syntax wasn’t.`,
    fix: `Lesson learned: Each language has its own rules. The brain sometimes forgets that.`,
    status: "resolved",
  },

  {
    id: "invisible-image",
    title: "The Image That Was There, But Not Visible",
    emoji: "🖼️",
    date: "2024-05-18",
    tags: ["Game Dev", "Debugging"],
    teaser:
      "The image existed. It just wasn’t where I thought it was.",
    story: `While working on a project, an image wouldn’t show up.

Paths were correct. Naming seemed fine.

After a lot of back and forth, the actual issue appeared.

The image was being rendered outside the visible area.

It existed. Just not on screen.`,
    fix: `Lesson learned: If something isn’t visible, check where it actually is.`,
    status: "resolved",
  },


  {
    id: "git-overwrite",
    title: "When Changes Disappeared",
    emoji: "📂",
    date: "2024-06-15",
    tags: ["Version Control", "Teamwork"],
    teaser:
      "Two people. One file. One outcome.",
    story: `Working in a team, we made changes to the same file.

At the same time.

One version replaced the other.

We knew it could happen.

We just didn’t expect it to happen then.`,
    fix: `Lesson learned: Coordination matters as much as code in teamwork.`,
    status: "resolved",
  },

  {
  id: "php-extension-realization",
  title: "The File Extension Moment",
  emoji: "📄",
  date: "2024-06-25",
  tags: ["Web", "PHP"],
  teaser:
    "The solution was simple. The realization was delayed.",
  story: `While working with server-side code, everything seemed fine, but the page didn’t behave as expected.

Then I realized: the file itself needed to be treated as PHP, not HTML. Converting the file to a .php extension made everything work.

A small change, but a huge difference.`,
  fix: `Lesson learned: Sometimes the file itself is the problem.`,
  status: "resolved",
},


  {
    id: "partial-context-debugging",
    title: "When Missing Context Breaks Everything",
    emoji: "🧠",
    date: "2024-07-22",
    tags: ["Debugging"],
    teaser:
      "Asked for help without full context. Got answers that broke everything.",
    story: `While debugging, I didn’t provide full context to the AI tool I was using for assistance with my project.

The suggestions I got were based on assumptions.

I applied them.

The project broke further.

Eventually had to start over.`,
    fix: `Lesson learned: Good input leads to good output — even in debugging.`,
    status: "resolved",
  },

  

  

  {
  id: "wrong-os-install",
  title: "The Wrong Platform Moment",
  emoji: "🖥️",
  date: "2024-08-25",
  tags: ["OS"],
  teaser:
    "Tried installing something that was never meant to run there.",
  story: `I tried installing a Windows application on my Ubuntu system.

It didn’t work. At first, I kept troubleshooting, thinking it was something I could fix.

Then it hit me: the platform was wrong. The application simply wasn’t meant to run on Ubuntu.`,
  fix: `Lesson learned: Always know your environment before installing anything.`,
  status: "resolved",
},

  

  
];

/* -------------------------------------------------------
   Dark-humored developer quotes — shown randomly on home.
   Add your own here.
------------------------------------------------------- */
const quotes = [
  "It works on my machine. Ship the machine.",
  "Writing code is like cooking without a recipe — sometimes it’s edible, sometimes it’s a fire alarm.",
  "The best code is no code at all. The worst code is your code from 6 months ago.",
  "A bug is not a bug. It's an undocumented feature.",
  "Debugging is like being a detective in a crime movie where you are also the culprit.",
  "99 little bugs in the code. Take one down, patch it around. 127 little bugs in the code.",
  "It runs. Submit it.",
  "console.log('please work'); // added by desperate developer at 3am",
  "I don't always debug, but when I do, it's at 3am before submission.",
  "That moment when your code works… and you have no idea why.",
  "Git blame: a tool for finding out who wrote this code, only to discover it was you, 3 months ago.",
  "Debugging: turning coffee into code and tears into solutions.",
  "In theory, theory and practice are the same. In practice, they are not.",
  "Have you tried turning it off and on again? (The answer is always yes. The problem persists.)",
  "A senior developer is someone who has made every mistake at least twice.",
];
