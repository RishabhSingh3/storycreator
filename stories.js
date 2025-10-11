function generateStory(topic, authorName) {
    const storyTemplates = [
        generateMysteryStory(topic, authorName),
        generateAdventureStory(topic, authorName),
        generateComedyStory(topic, authorName)
    ];
    
    // Return a random template filled with the topic
    return storyTemplates[Math.floor(Math.random() * storyTemplates.length)];
}

function generateMysteryStory(topic, authorName) {
    return {
        title: `The Mystery of ${topic}`,
        pages: [
            {
                left: `<h2>The Mystery of ${topic}</h2>
                <p class="author-credit">By <span class="story-author">${authorName}</span></p>
                <p>It began on an ordinary Tuesday when <span class="highlight">Detective Maya Patel</span> received an anonymous message about ${topic}. The note was cryptic, written in peculiar purple ink that seemed to shimmer under certain lights, and it read: "<span class="emphasis">The truth about ${topic} isn't what you think. Meet me at the old observatory at midnight—come alone.</span>"</p>
                <p>Maya had solved countless cases in her seventeen years, but something about this felt different. Her instincts, honed through years of unraveling mysteries, screamed that ${topic} held secrets that could change everything she thought she knew.</p>`,
                right: `<p>"You're not seriously considering this?" her colleague <span class="highlight">Ravi</span> asked, peering at the mysterious note. "It's obviously a trap. Who sends purple shimmer-ink messages anymore?"</p>
                <p>But Maya couldn't shake the feeling of <span class="emphasis">inexorable curiosity</span>. The message mentioned ${topic}—something that had been haunting the town's whispers for weeks. People claimed to see strange occurrences, inexplicable phenomena, all connected somehow to ${topic}.</p>
                <p>"That's precisely why I need to go," Maya replied, pocketing her detective's badge. "Someone knows something about ${topic}, and they want to talk. I can't ignore that."</p>`
            },
            {
                left: `<p>The observatory loomed against the midnight sky, its ancient telescope dome silhouetted like a sleeping giant. As Maya approached, she noticed something peculiar—<span class="highlight">glowing symbols</span> etched into the ground, forming a circle around the entrance. They pulsed with an otherworldly luminescence that made her skin tingle.</p>
                <p>Inside, a figure waited, cloaked in shadows. "You came," the voice echoed, neither young nor old, neither welcoming nor hostile.</p>
                <p>"Tell me about ${topic}," Maya demanded, her hand instinctively moving to her flashlight. "What's really going on?"</p>`,
                right: `<p>The figure stepped into a shaft of moonlight, revealing a face that Maya recognized—<span class="highlight">Professor Elena Novak</span>, the renowned scientist who had mysteriously disappeared three months ago.</p>
                <p>"${topic} isn't what anyone thinks," Elena said urgently. "I've been investigating it, and what I discovered was <span class="emphasis">astonishing</span>. It's connected to a phenomenon that defies conventional explanation. Quantum entanglement? Parallel dimensions? Something entirely unprecedented?"</p>
                <p>Maya's detective mind raced. "You disappeared because of ${topic}?"</p>
                <p>"I had to," Elena whispered. "There are others who don't want this truth revealed. They'll do anything to keep ${topic} a secret."</p>`
            },
            {
                left: `<p>Over the next hour, Elena revealed everything. ${topic} was part of an elaborate network—a mystery within a mystery. Ancient civilizations had left clues, modern technology had uncovered patterns, and everything pointed to a <span class="highlight">revelation</span> that would redefine humanity's understanding of reality.</p>
                <p>"But here's the twist," Elena said with a mysterious smile. "Solving this mystery doesn't give you answers—it gives you better <span class="emphasis">questions</span>."</p>
                <p>Maya absorbed it all, her notebook filling with connections, theories, possibilities. ${topic} wasn't just a case—it was a doorway to understanding something profound.</p>`,
                right: `<p>But returning to town proved more complicated than expected. The moment Maya tried to publish Elena's findings, strange things began happening. Her computer files corrupted mysteriously. Anonymous warnings appeared in her inbox. Someone—or <span class="emphasis">something</span>—didn't want the truth about ${topic} revealed.</p>
                <p>"They're watching us," Elena whispered during a clandestine meeting. "The organization I fled from. They've monitored ${topic} for decades, keeping it secret."</p>
                <p>"Why?" Maya demanded. "What are they afraid of?"</p>
                <p>"That humanity isn't ready," Elena replied grimly. "That knowledge of ${topic} might change society in ways we can't predict or control."</p>`
            },
            {
                left: `<p>Maya refused to back down. With Ravi's help, she devised a <span class="highlight">brilliant strategy</span>—instead of fighting the shadowy organization, she'd expose them by making ${topic} impossible to suppress. She distributed the information across thousands of independent sources simultaneously, a digital flood that couldn't be stopped.</p>
                <p>The plan worked spectacularly. Within hours, ${topic} became the most discussed phenomenon worldwide. Scientists, philosophers, ordinary people—everyone wanted to understand this <span class="emphasis">paradigm-shifting discovery</span>.</p>`,
                right: `<p>The mysterious organization, faced with their secrets laid bare, had no choice but to engage openly. Their leader, a woman named Dr. Thorne, finally met Maya face-to-face.</p>
                <p>"You've unleashed something <span class="highlight">unprecedented</span>," Dr. Thorne said, though her tone wasn't entirely disapproving. "For better or worse, ${topic} is now humanity's to grapple with."</p>
                <p>"That's exactly as it should be," Maya replied confidently. "Truth shouldn't be hoarded by the few. It belongs to everyone."</p>
                <p>Dr. Thorne smiled slightly. "Perhaps you're right. Perhaps humanity is more ready than we thought."</p>`
            },
            {
                left: `<p>As dawn broke, Maya stood outside the observatory, holding Elena's research. The mystery of ${topic} was far from over, but now she had direction. More importantly, she had proof that the world was far more <span class="highlight">wonderous and strange</span> than anyone imagined.</p>
                <p>"Ready to blow this case wide open?" Ravi asked, appearing beside her with coffee and determination.</p>
                <p>Maya grinned. "Ready to change everything we know about ${topic}? Absolutely."</p>`,
                right: `<p>The investigation was just beginning, and Maya couldn't wait to unravel every tantalizing thread of this <span class="emphasis">extraordinary enigma</span>. But now, instead of working in shadows, she'd have the entire world as her collaborators.</p>
                <p>${topic} had transformed from a mystery into a <span class="highlight">movement</span>—proof that curiosity, courage, and the relentless pursuit of truth could triumph over secrecy and fear.</p>
                <p>As the sun illuminated the observatory's ancient dome, Maya knew one thing with certainty: this was only the first chapter in humanity's understanding of ${topic}. The best mysteries, after all, never truly end—they simply reveal new questions worth asking.</p>
                <p><strong>THE END... OR IS IT JUST THE BEGINNING?</strong></p>`
            }
        ]
    };
}

function generateAdventureStory(topic, authorName) {
    return {
        title: `Quest for ${topic}`,
        pages: [
            {
                left: `<h2>Quest for ${topic}</h2>
                <p class="author-credit">By <span class="story-author">${authorName}</span></p>
                <p><span class="highlight">Sixteen-year-old Alex Rivera</span> never expected to find a mysterious map hidden inside an old textbook. But there it was—ancient parchment that practically hummed with energy, marked with cryptic symbols and one word that changed everything: <span class="emphasis">${topic}</span>.</p>
                <p>"This is insane," Alex muttered, tracing the intricate pathways on the map. According to the faded annotations, ${topic} was real—not a myth, not a legend, but an actual discovery waiting to be made. And the map led straight to it.</p>`,
                right: `<p>By the next morning, Alex had assembled an unlikely crew: <span class="highlight">Jordan</span>, the tech genius who could hack anything; <span class="highlight">Sam</span>, the fearless athlete who never backed down from a challenge; and <span class="highlight">Riley</span>, the history buff who spoke five languages and knew obscure facts about everything.</p>
                <p>"So let me get this straight," Jordan said, adjusting her augmented-reality glasses. "We're skipping the school field trip to go on a treasure hunt for ${topic}? I'm absolutely in."</p>
                <p>The map led them to an abandoned museum on the outskirts of town—a place locals whispered about but never visited. Perfect for an adventure.</p>`
            },
            {
                left: `<p>Inside the museum, everything was covered in dust and decades of neglect. But following the map's coordinates, they discovered a hidden chamber behind a painting of ancient explorers. The chamber was filled with <span class="highlight">wonders</span>—artifacts from civilizations that shouldn't exist, technology that defied the laws of physics.</p>
                <p>"Look at this!" Sam exclaimed, holding up a device that projected holographic star maps. "This is centuries ahead of our technology!"</p>
                <p>But the real prize was deeper inside: a vault containing ${topic}. Not just information about it—the actual, tangible <span class="emphasis">essence</span> of what they'd been seeking.</p>`,
                right: `<p>Riley translated the inscription on the vault: "To those brave enough to seek ${topic}, know that discovery is not the end but the <span class="highlight">beginning</span>. What you find here will change not just your life, but the world."</p>
                <p>Inside the vault, they found it—${topic} in all its glory. It was more incredible than they'd imagined, a convergence of science, history, and something almost magical. Ancient wisdom combined with futuristic potential.</p>
                <p>"We did it," Alex whispered, awestruck. "We actually found ${topic}."</p>
                <p>"Now what?" Jordan asked, eyes wide with wonder.</p>`
            },
            {
                left: `<p>The team realized they weren't alone. A more insidious threat emerged—a rival expedition sponsored by a powerful corporation, determined to claim ${topic} for profit. They arrived just days after our heroes sealed the museum, their heavy machinery and armed guards making their intentions clear.</p>
                <p>"We can't let them take it," Alex whispered, watching from the shadows as corporate helicopters landed. "This isn't just about discovery—it's about what's right."</p>
                <p>"Then let's protect it," Jordan replied, her fingers already flying across her hacked tablet. "They think they can just buy everything. Time to show them they're wrong."</p>`,
                right: `<p>The confrontation was inevitable. The corporate team leader, a smooth-talking executive named Mr. Vance, approached them with an ultimatum: surrender ${topic} or face dire consequences.</p>
                <p>"Kids, you have no idea what you're dealing with," Vance sneered. "Corporations like mine don't just lose. We buy what we want."</p>
                <p>But the team stood firm. Riley challenged him with ancient laws about discoverer's rights, Sam blocked their way physically, Jordan disabled their communications, and Alex appealed to his conscience.</p>
                <p>"${topic} belongs to humanity," Alex said firmly. "Not to be hoarded by the rich and powerful."</p>`
            },
            {
                left: `<p>The corporate team backed down, but not before issuing ominous threats. The four friends returned home as local heroes, their discovery making international news. But with fame came complications—scientists wanting samples, governments demanding access, corporations threatening lawsuits.</p>
                <p>"This is just the beginning," Riley warned. "Protecting ${topic} isn't about defeating Vance—it's about building a world where discoveries like this serve everyone, not just the elite."</p>`,
                right: `<p>The first challenge came swiftly: Vance's company sued for access to ${topic}. Courtrooms became their new battlefield. The experience transformed the team—not just physically, but emotionally. They grew from ordinary teenagers into extraordinary leaders.</p>
                <p>"Remember why we started this," Alex would remind them during long days in court. "It's not about ${topic} being ours—it's about ${topic} benefiting everyone."</p>`
            },
            {
                left: `<p>The case ended spectacularly. Armed with documentation from the museum itself and Riley's translations of ancient discoverer's rights, they won. Not just the lawsuit, but a landmark decision that changed discovery law worldwide. Corporate exploitation of scientific finds was no longer automatic—ethical considerations would always factor in.</p>
                <p>"You kids changed the world," the judge said at the conclusion. "Remind us adults what discovery is really supposed to be about."</p>`,
                right: `<p>They established the Guardians of ${topic}, an international network of young explorers and scientists committed to ethical discovery. The museum became a learning center, open to all, where ${topic} taught lessons about curiosity, courage, and caring for the planet's hidden treasures.</p>
                <p>"Think anyone will believe us?" Sam asked with a grin.</p>
                <p>"Eventually," Alex replied, clutching the documentation. "But first, we've got work to do. ${topic} is just the beginning of discoveries waiting to be made."</p>
                <p>The four friends walked into the sunset, already planning their next <span class="emphasis">extraordinary adventure</span>. For them, this wasn't just a story—it was the start of a lifetime dedicated to wonder, discovery, and protecting the world's precious secrets.</p>
                <p><strong>THE END</strong></p>`
            }
        ]
    };
}

function generateComedyStory(topic, authorName) {
    return {
        title: `The Hilarious Incident with ${topic}`,
        pages: [
            {
                left: `<h2>The Hilarious Incident with ${topic}</h2>
                <p class="author-credit">By <span class="story-author">${authorName}</span></p>
                <p>It was supposed to be a simple school project. <span class="highlight">Chris Martinez</span> and best friend <span class="highlight">Taylor</span> just needed to create a presentation about ${topic}. How hard could it be?</p>
                <p>Very hard, as it turned out. Especially when Chris accidentally spilled energy drink all over the keyboard while researching ${topic} at 2 AM, causing the computer to auto-correct every instance of "${topic}" to something completely <span class="emphasis">ridiculous</span>.</p>
                <p>"Why does it keep changing ${topic} to 'Dancing Pickles'?" Chris wailed, staring at the screen in horror.</p>`,
                right: `<p>Taylor, who had warned Chris about the energy drink, couldn't stop laughing. "This is <span class="highlight">spectacular</span>. We're supposed to present about ${topic}, but your computer thinks we're doing a documentary on pickle choreography!"</p>
                <p>Things got worse—or better, depending on your perspective—when Chris's little sister decided to "help" by adding her own artistic interpretation of ${topic}. She was seven. She thought ${topic} needed more glitter. And dinosaurs. And at least fifteen cat stickers.</p>
                <p>"Is that a T-Rex wearing a tutu next to your explanation of ${topic}?" their teacher, Mr. Henderson, would later ask.</p>`
            },
            {
                left: `<p>The day of the presentation arrived with Chris and Taylor woefully unprepared. Their slideshow was a magnificent disaster—a chaotic blend of actual information about ${topic}, dancing pickle GIFs, glitter-covered dinosaurs, and inexplicably, several photos of Taylor's grandmother's cat, Mr. Whiskers.</p>
                <p>"This is going to be <span class="emphasis">catastrophic</span>," Chris muttered backstage.</p>
                <p>"Or legendary," Taylor countered with a grin. "When in doubt, commit to the chaos."</p>
                <p>They walked on stage, and the first slide appeared: a majestic image of ${topic}... wearing a superhero cape.</p>`,
                right: `<p>The class erupted. Not in horror, but in <span class="highlight">laughter</span>. Chris and Taylor, embracing the absurdity, delivered their presentation with theatrical flair. They discussed ${topic} with genuine knowledge, but incorporated the ridiculous elements with such confidence that it somehow worked.</p>
                <p>"As you can see," Chris said seriously, pointing to the T-Rex in a tutu, "this represents the evolutionary significance of ${topic} in prehistoric times."</p>
                <p>"Fascinating," Mr. Henderson said, barely suppressing a smile. "And the dancing pickles?"</p>
                <p>"Metaphorical representation, obviously," Taylor replied without missing a beat.</p>`
            },
            {
                left: `<p>Their success became legendary at school. Students from other classes began approaching them for help with their own presentations, offering to pay them in snacks or homework passes. Chris and Taylor started a secret consultation service, charging outrageous fees for their "presentation enhancement services."</p>
                <p>"For just three homework passes," Taylor would say dramatically, "we can turn your boring ${topic} research into masterpiece."</p>
                <p>Word spread, and their waiting list grew longer. Even seniors were asking for their services, and rival consulting groups formed with amusing names like "PowerPoint Wizards" and "Chart Masters."</p>`,
                right: `<p>But fame brought complications. Principal Nakamura heard rumors of "unauthorized presentation enhancement services" and called them into the office. Chris and Taylor sat nervously, surrounded by serious adults, ready to defend their entrepreneurial spirit.</p>
                <p>"I understand you two have been quite busy," Principal Nakamura said, her eyes twinkling. She opened a laptop showing their famous presentation. "Tell me... how exactly does ${topic} relate to dancing pickles?"</p>`
            },
            {
                left: `<p>Chris and Taylor explained everything—the energy drink spill, the sister's glitter obsession, the cat stickers— and to their surprise, Principal Nakamura wasn't angry. In fact, she was amused.</p>
                <p>"You know," she said thoughtfully, "we've been pushing for more engaging student presentations. You two might be onto something. How would you feel about presenting a workshop on creative presentation techniques?"</p>
                <p>The irony wasn't lost on them. They went from nearly getting in trouble for "enhancing" presentations to being asked to teach other students how to do it properly.</p>`,
                right: `<p>The workshop became another spectacular success. Students packed the auditorium, teachers watched with admiration, and even the school newspaper covered it. "From Disaster to Distinguished: How Two Students Revolutionized Presentations"</p>
                <p>Chris and Taylor's ${topic} presentation had changed their school—not through perfection, but through embracing the chaos of learning. They proved that sometimes, the best way to teach and learn is through preparation meeting accident, curiosity meeting catastrophe, and seriousness meeting silliness.</p>`
            },
            {
                left: `<p>Now, whenever someone complains about presentations being boring or schoolwork being tedious, Chris and Taylor share their secret: sometimes the perfect presentation isn't perfect at all. Sometimes the best learning happens when you commit to the chaos, embrace the unexpected, and remember that you're human—messy, funny, brilliant, and full of surprises.</p>
                <p>"Always add glitter," Taylor says with a wink.</p>
                <p>"And never trust auto-correct at 2 AM," Chris adds sagely.</p>`,
                right: `<p>Their ${topic} project didn't just earn an A—it earned respect, admiration, and most importantly, a community of students who learned that learning can be both serious and spectacularly silly.</p>
                <p>And the really funny part? The dancing pickles presentation was so memorable, school policy changed. Presentations could now include "creative interpretations" as long as actual content was included. Their teacher's favorite phrase became: "When in doubt, add more glitter."</p>
                <p>Chris and Taylor high-fived, already planning their next project. Whatever the topic, they'd make it spectacular—and probably add more glitter.</p>
                <p>Mr. Whiskers the cat, featured prominently in slide seventeen, would be proud.</p>
                <p><strong>THE END</strong></p>`
            }
        ]
    };
}
