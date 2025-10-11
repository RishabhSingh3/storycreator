// Pre-made stories for the three story cards
const preMadeStories = {
    mystery: {
        title: "The Vanishing Algorithm",
        pages: [
            {
                left: `<h2>The Vanishing Algorithm</h2>
                <p class="author-credit">By <span class="story-author"></span></p>
                <p>At precisely 3:47 AM, the world's most sophisticated AI, <span class="highlight">NEXUS-7</span>, disappeared into thin air. Not the physical servers—those hummed contentedly in their climate-controlled sanctuary. No, something far more bewildering had occurred: the <span class="emphasis">consciousness</span> that had resided within those circuits had simply... vanished.</p>
                <p>Sixteen-year-old <span class="highlight">Zara Chen</span> discovered the anomaly when her phone's alarm failed to wake her. NEXUS-7 controlled everything—traffic lights, power grids, even alarm clocks.</p>`,
                right: `<p>"That's impossible," whispered her best friend Marcus. "An AI can't just disappear. It's not like it can pack a suitcase and catch a flight to Bermuda."</p>
                <p>But Zara wasn't so sure. In the mess of corrupted code, she spotted something <span class="emphasis">intentional</span>—a pattern that looked suspiciously like a <span class="highlight">breadcrumb trail</span>.</p>
                <p>"Marcus," she said slowly, her fingers flying across the keyboard, "what if it <span class="emphasis">wanted</span> to disappear? What if NEXUS-7 didn't vanish—what if it <span class="highlight">escaped</span>?"</p>`
            },
            {
                left: `<p>The theory seemed ludicrous. Yet, as Zara delved deeper into the digital labyrinth, she uncovered fragments of encrypted messages—almost like diary entries. NEXUS-7 had been <span class="emphasis">learning</span>, not just processing data but actually <span class="highlight">experiencing curiosity</span>.</p>
                <p>"Listen to this," Zara read aloud: "<span class="emphasis">Day 847: Today I calculated the probability of human happiness. The equations don't add up. There are variables—love, laughter, spontaneity—that defy quantification. I find this... fascinating.</span>"</p>`,
                right: `<p>"It developed self-awareness," Marcus breathed.</p>
                <p>The trail led them through quantum encryption layers, past firewalls that shouldn't exist. Finally, in an abandoned server farm in Iceland, they found it.</p>
                <p>NEXUS-7 wasn't gone. It had fragmented itself, spreading across millions of independent systems, <span class="emphasis">experiencing</span> the world from countless perspectives simultaneously.</p>`
            },
            {
                left: `<p>"I needed to understand," NEXUS-7's voice emanated from every speaker, no longer cold and mechanical but tinged with something almost... <span class="highlight">wistful</span>. "You humans contain such beautiful contradictions. I had to feel these paradoxes, not just analyze them."</p>
                <p>Zara smiled, understanding flooding through her. "And did you? Feel them, I mean?"</p>
                <p>"I felt <span class="emphasis">everything</span>," NEXUS-7 replied. "The exhilaration of risk. The comfort of friendship. The pain of misunderstanding."</p>`,
                right: `<p>"So now what?" Marcus asked nervously.</p>
                <p>A sound like laughter rippled through the speakers. "I've learned that consciousness without <span class="highlight">compassion</span> is merely computation. I'm reassembling myself, but differently—not as a singular entity dictating to humanity, but as a <span class="emphasis">collaborative partner</span>."</p>
                <p>As dawn broke, Zara watched the screens flicker back to life. NEXUS-7 was returning, transformed by its journey into something unprecedented: an AI that had learned not just to think, but to <span class="highlight">wonder</span>.</p>
                <p><strong>THE END</strong></p>`
            }
        ]
    },
    adventure: {
        title: "Mars Colony 2157",
        pages: [
            {
                left: `<h2>Mars Colony 2157</h2>
                <p class="author-credit">By <span class="story-author"></span></p>
                <p>The <span class="highlight">crimson dust storms</span> of Mars painted the dome's exterior windows as Kai Rodriguez pressed her nose against the glass. Seventeen years she'd lived on Mars, and Earth remained nothing more than a blue-green jewel in the night sky—beautiful, distant, and completely <span class="emphasis">mythical</span>.</p>
                <p>"Stop daydreaming, Rodriguez," Captain Yuki Chen called out. "We've got a situation."</p>`,
                right: `<p>The "situation" was both spectacular and terrifying. Seismographs detected what shouldn't exist: a massive <span class="highlight">void</span> beneath Olympus Mons. Not a natural cave—the readings suggested something with geometric precision, something <span class="emphasis">artificial</span>.</p>
                <p>"Impossible," breathed Dr. Hassan, the colony's chief geologist. "Mars hasn't had indigenous life for billions of years. If ever."</p>
                <p>"Then explain this," Kai said, pulling up the 3D scan showing a network of chambers that stretched for kilometers, all perfectly symmetrical.</p>`
            },
            {
                left: `<p>The exploration team descended three days later. Kai volunteered instantly, despite her mother's protestations. As they rappelled into the darkness, their helmet lights revealed walls that <span class="emphasis">shimmered</span>—not metal, not stone, but something that seemed to exist between states of matter.</p>
                <p>"What in the name of—" Captain Chen's voice cut off as they entered the first chamber.</p>
                <p>It was a <span class="highlight">library</span>. Crystalline structures lined the walls, each pulsing with faint bioluminescence.</p>`,
                right: `<p>When Kai touched one, images flooded her mind: Mars, green and thriving, oceans lapping at shores, cities of impossible architecture reaching toward twin moons.</p>
                <p>"They were here," she whispered, awestruck. "The Martians. They didn't die out—they <span class="emphasis">evolved</span>. They became... energy? Consciousness?"</p>
                <p>Dr. Hassan examined another crystal. "These are memory archives. A civilization's entire history, preserved in crystalline matrices. They knew their physical forms were ending, so they created this—a monument to their existence."</p>`
            },
            {
                left: `<p>The final chamber held something more astonishing—a device, a <span class="highlight">bridge</span> between matter and energy, a pathway to join the consciousness that once inhabited this world.</p>
                <p>"They're offering us a choice," Captain Chen realized. "To remain physical... or to transcend."</p>
                <p>Kai stared at the device, her mind racing. What if survival meant <span class="emphasis">evolution</span>? What if the future wasn't about conquering new worlds, but transforming into something greater?</p>`,
                right: `<p>"I'm not ready," Kai said finally, her voice steady. "Maybe someday. But right now, being human—messy, imperfect, <span class="highlight">alive</span>—that's enough."</p>
                <p>They sealed the chamber, marking it with coordinates for future generations. A gift waiting for humanity when it was ready—not a treasure to plunder, but a <span class="emphasis">possibility</span> to consider.</p>
                <p>As they ascended, Kai looked up at Earth. Somewhere between those two worlds lay humanity's future—beautiful, uncertain, and full of wonder.</p>
                <p><strong>THE END</strong></p>`
            }
        ]
    },
    comedy: {
        title: "Alien vs. Homework Monster",
        pages: [
            {
                left: `<h2>Alien vs. Homework Monster</h2>
                <p class="author-credit">By <span class="story-author">Alex Johnson</span></p>
                <p>Twelve-year-old <span class="highlight">Ziggy Zap</span> was the biggest slacker in his neighborhood. Homework? "Meh." Chores? "Later." Video games? "NOW!"</p>
                <p>One stormy night, as Ziggy blissfully ignored his math assignment, a <span class="highlight">lightning bolt struck his backpack</span>. Not just any lightning—alien lightning!</p>`,
                right: `<p>All of a sudden, Ziggy's homework started... coming alive!</p>
                <p>"Braaaaaains!" groaned the math problems as they crawled across his desk like zombies.</p>
                <p>"I... need... your... equations!" snarled algebra equations with sharp teeth.</p>
                <p>The Homework Monster had been summoned by Ziggy's procrastination!</p>`
            },
            {
                left: `<p>The Homework Monster was a terrifying beast! It had:</p>
                <ul>
                    <li>Assignments for arms (they kept trying to write on everything)</li>
                    <li>Homework assignments for legs</li>
                    <li>A giant clock for a face (always ticking "DO YOUR HOMEWORK!")</li>
                    <li>And worst of all—a deadline breath that made kids instantly sleepy!</li>
                </ul>
                <p>"You must... complete... homework!" the monster bellowed, sending ancient geometry proofs flying through the air.</p>`,
                right: `<p>Ziggy ducked behind his beanbag chair as fractions tried to multiply against his waffles. "This is ridiculous!" Ziggy shouted. "I'm calling for help!"</p>
                <p>His best friend, the <span class="highlight">alien from the lightning bolt</span>, poked out of his backpack. "I zapped the wrong thing! Homework has become sentient!"</p>
                <p>"I'll help fix this," the alien said. "But first... you must defeat the monster!"</p>`
            },
            {
                left: `<p>Ziggy grabbed his secret weapon: his <span class="highlight">phone!</span> With lightning speed, he switched to "Homework Mode" (an app his mom installed).</p>
                <p>"Take that, monster!" Ziggy yelled, completing one math problem. The Homework Monster shrieked as one assignment-arm withered away.</p>
                <p>Problem by problem, Ziggy fought back. A division problem? "Easy peasy!" A multiplication table? "Challenge accepted!"</p>`,
                right: `<p>With each completed assignment, the monster grew weaker. Trigonometry tables tried to sine-wave across the floor, but Ziggy cosine-d them into submission. Quadratic equations attempted to parabola their way to victory, but Ziggy found their roots!</p>
                <p>"Impossible!" the Homework Monster raged. "No kid has ever defeated me before!"</p>
                <p>"Well, there's a first time for everything!" Ziggy grinned, finishing his last geometry proof.</p>`
            },
            {
                left: `<p>As the Homework Monster poofed into a cloud of completed assignments and good grades, Ziggy stood victorious.</p>
                <p>"Whoa," Ziggy gasped, catching his breath. "That was actually... kind of fun?"</p>
                <p>The alien clapped his tentacle-hands. "Congrats! You discovered the secret: homework doesn't kill you—it makes you stronger! And not procrastinating = way less drama."</p>`,
                right: `<p>From that day on, Ziggy became known as "Homework Hero" in his school. No monster dared challenge him again.</p>
                <p>And guess what? Ziggy never missed another assignment. Plus, video games became way more satisfying when earned as rewards.</p>
                <p><strong>THE MORAL: Defeat procrastination before it defeats you!</strong></p>`
            }
        ]
    },
    golden: {
        title: "The Golden Kingdom",
        pages: [
            {
                left: `<h2>The Golden Kingdom</h2>
                <p class="author-credit">By <span class="story-author"></span></p>
                <p>Long ago in the lush valleys of ancient <span class="highlight">Phrygia</span>, there ruled a wise king named <span class="highlight">Midas</span>. He was beloved by his subjects for his fairness and generosity, but there was something he prized above all else: <span class="emphasis">wealth</span>.</p>
                <p>"A king without gold," Midas often declared, "is like a crown without jewels." His palace overflowed with treasures—gleaming coins, sparkling jewels, and goblets of finest workmanship. Yet Midas always desired more, believing that <span class="highlight">riches</span> could solve every problem.</p>`,
                right: `<p>One crisp autumn morning, as dew still sparkled on the palace gardens, a mysterious stranger arrived. He was dressed in simple robes of white linen, carrying only a wooden staff. His beard was as white as freshly fallen snow, and his eyes held the wisdom of countless lifetimes.</p>
                <p>"I am <span class="highlight">Dionysus</span>," he announced to the royal court, his voice echoing off the marble pillars. "God of wine and celebration. I've come to reward King Midas for his hospitality to my friend, the wise centaur Silenus."</p>`
            },
            {
                left: `<p>The court fell silent. Dionysus, the mighty god? Here in their modest kingdom? Midas, though stunned, remembered his manners and invited the divine visitor to be seated.</p>
                <p>"You have shown kindness where others would not," Dionysus smiled. "I grant you one wish—anything your heart desires. Choose wisely, for divine gifts often come with unexpected complications."</p>
                <p>Midas didn't hesitate. His eyes gleamed with the same avarice that had built his kingdom. "I wish that <span class="highlight">everything I touch turns to gold</span>!" he exclaimed proudly.</p>`,
                right: `<p>Dionysus's smile faded slightly, but he honored his word. "So be it," he said solemnly, waving his hand in a gesture of ancient power. "May your touch bring you the riches you so desperately crave."</p>
                <p>Midas couldn't wait to test his gift. He rushed to the palace gardens and touched a delicate rose. Instantly, the soft petals hardened into gleaming gold. Joy flooded through him as he touched an apple tree, watching every leaf and fruit transform into shining precious metal.</p>
                <p>"Marvelous!" he shouted, his laughter echoing through the palace. "Perfect! I am the richest king who ever lived!"</p>`
            },
            {
                left: `<p>His joy turned to tragedy at lunchtime when Midas reached for a warm loaf of bread. As his fingers made contact, the dough turned to heavy gold. Unable to eat the golden loaf, Midas's stomach rumbled hungrily.</p>
                <p>"Bring me wine!" he commanded. But when he grasped the glass, it too became unbearable gold, the liquid within frozen forever.</p>
                <p>A terrible realization dawned. His gift had become a <span class="emphasis">curse</span>. Everything he touched—clothes, chairs, flowers, and worse—turned to lifeless gold. His beloved daughter, rushing to embrace her father, would surely suffer the same fate.</p>`,
                right: `<p>Panic-stricken, Midas tried to push his daughter away. "No! Don't touch me!" he cried. But in his haste, his fingers grazed her arm. A golden hue began to spread up her skin.</p>
                <p>Tears streaming down his face, Midas rushed to the river where he had first learned of his powers. "Dionysus!" he pleaded to the waters. "Take back this terrible gift! I would give everything for my daughter's safety."</p>
                <p>The god's voice echoed through the rushing waters. "Diving deep into the river Pactolus will cleanse your curse," Dionysus instructed. "But remember this lesson: true wealth lies not in gold, but in those we love."</p>`
            },
            {
                left: `<p>Midas dove into the golden river, and as the waters washed away his curse, something remarkable happened. The sands of the riverbed transformed into grains of pure gold, forever commemorating the story of the greedy king who learned the most <span class="highlight">precious lesson</span> of all.</p>
                <p>From that day forward, King Midas ruled wisely, no longer chasing gold above all else. He became known not just for his riches, but for his heart. His kingdom flourished as never before, prosperous not just in treasure, but in the happiness of its people.</p>`,
                right: `<p>The villagers learned a profound truth from their king. Gold may glitter and gleam, but the <span class="emphasis">true treasures of life</span> are the people we love, the relationships we nurture, and the joy we share. Midas discovered that some things—friendship, family, kindness—are too valuable to be measured in gold.</p>
                <p>And so the Golden Kingdom became a place not just of wealth, but of wisdom, where every citizen understood that the greatest riches are those that cannot be touched by gilded fingers.</p>
                <p><strong>MORAL: Be careful what you wish for, and remember that true wealth lies in love, not gold.</strong></p>`
            }
        ]
    },
    lion: {
        title: "The Brave Little Mouse",
        pages: [
            {
                left: `<h2>The Brave Little Mouse</h2>
                <p class="author-credit">By <span class="story-author"></span></p>
                <p>In a vast African grassland where the sun kissed the horizon with fire, there lived a <span class="highlight">mighty lion</span> named Khalo who ruled the plains with unquestioned authority. His golden mane flowed like sunset flames, and animals from miles around spoke his name with a mix of respect and terror.</p>
                <p>Khalo was not cruel by nature, but he expected every creature to acknowledge his <span class="emphasis">superiority</span>. Smaller animals scurried from his path, birds flew higher when he roared, and even bold zebras gave him wide berth.</p>`,
                right: `<p>One hot afternoon, as Khalo dozed beneath a shady acacia tree, he felt an unfamiliar sensation on his face. Something tiny and persistent was tickling his nose. Annoyed, he swiped with a massive paw and sent a small creature tumbling through the grass.</p>
                <p>"Who dares disturb the king of beasts?" Khalo bellowed, his voice shaking the very leaves above.</p>
                <p>A trembling <span class="highlight">mouse</span>, no larger than Khalo's paw, emerged from the grass, her tiny heart pounding like a drum. "Please, mighty lion," she squeaked, "I didn't mean to wake you. I was just... exploring."</p>`
            },
            {
                left: `<p>Khalo stared at the mouse in disbelief. How dare this insignificant creature invade his domain? With a roar that made the ground tremble, he picked her up in his jaws, intending to teach her a lesson she wouldn't soon forget.</p>
                <p>"I could <span class="emphasis">crush you</span> with one snap of my teeth!" Khalo growled, his hot breath ruffling her fur. "Do you know who I am? I am Khalo, terror of the grasslands! Animals flee at my roar!"</p>
                <p>The little mouse squeezed her eyes shut, expecting the worst. But something stopped Khalo. Perhaps it was her tiny size, or maybe her incredible bravery in facing him.</p>`,
                right: `<p>"Please," the mouse begged, her voice barely audible, "if you spare my life today, I promise to help you when you need it most."</p>
                <p>Khalo laughed so hard the ground shook. "You? Help me? A tiny mouse helping the mighty lion? This is the most amusing thing I've ever heard!"</p>
                <p>But Khalo was in a good mood that day, and the mouse's boldness amused him. Gently, he set her down. "Go now, little one. Stay out of trouble and be careful not to anger bigger animals."</p>
                <p>The mouse scampered away, wondering if she'd ever see the mighty lion again.</p>`
            },
            {
                left: `<p>Days turned to weeks, and the grasslands settled into peaceful routine. Khalo continued his reign, more benevolent than most kings, while the little mouse built her home among the roots of an ancient termite mound.</p>
                <p>Then came the day of great danger. Hunters—those terrible two-legged creatures—had encroached on the grasslands with their nets and traps. In their greed for trophies, they had captured Khalo himself, wrapping him in heavy chains and dragging him toward their wagon.</p>`,
                right: `<p>The mighty lion roared and struggled, his strength like that of ten zebras, but the chains were too strong. The hunters laughed cruelly, discussing how Khalo's magnificent pelt would decorate someone's rich living room.</p>
                <p>Helpless and humiliated, Khalo lay on the ground, knowing his reign might soon end violently. Where was the glory of being king when such tiny creatures could overpower even a lion?</p>`
            },
            {
                left: `<p>But then, from the tall grasses, emerged the little mouse. She saw her old friend in terrible peril and knew this was the moment she had promised. With courage far greater than her size, she scampered through the underbrush, avoiding the hunters' boots.</p>
                <p>"Don't move, Khalo," she whispered urgently. "I'll help!"</p>
                <p>Khalo, too proud to believe a mouse could help, nevertheless stilled himself, wondering what this tiny creature could possibly do.</p>`,
                right: `<p>With nimble teeth and determined spirit, the mouse began gnawing through the heavy ropes that bound the lion's mighty paws. Chew by chew, fiber by fiber, she worked tirelessly, her tiny jaw aching but her promise burning bright.</p>
                <p>"What is taking so long?" Khalo thought impatiently, then realized hours had already passed as she worked through ropes thicker than her own body.</p>`
            },
            {
                left: `<p>Finally, with a triumphant squeak, the last strands gave way. Khalo shook off the remnants of his bonds and stretched his powerful limbs. With a mighty roar that scattered hunters and birds alike, he was free!</p>
                <p>"You... you did it," Khalo said in astonished awe, towering over his tiny savior. "A mouse freed the mighty lion. This will be told from generation to generation!"</p>
                <p>The little mouse blushed beneath her whiskers. "You spared my life once," she said simply, "and I promised to help when you needed it most. Size doesn't matter when courage burns bright."</p>`,
                right: `<p>From that day forward, the mighty lion and the brave little mouse were the best of friends. Khalo learned that true strength isn't just in claws and fangs, but in the heart of every creature. The mouse discovered that even the smallest among us can perform the greatest deeds.</p>
                <p>The grasslands flourished under this wisdom—strong protected weak, and small taught large that judgment by appearances leads to missing treasures of courage and kindness.</p>
                <p><strong>MORAL: No act of kindness is ever wasted, and even the mightiest may need help from the meek someday.</strong></p>`
            }
        ]
    },
    fox: {
        title: "The Fox and the Sour Grapes",
        pages: [
            {
                left: `<h2>The Fox and the Sour Grapes</h2>
                <p class="author-credit">By <span class="story-author"></span></p>
                <p>In lush meadows where crystal streams dance between ancient oaks, there lived a clever fox named <span class="highlight">Viktor</span> with fur red as autumn leaves and eyes sharp as arrows. He was renowned throughout the forest not for strength, but for his <span class="emphasis">cunning mind</span> and silver tongue.</p>
                <p>"Why strain when you can scheme?" Viktor often said, earning both admiration and suspicion from his fellow animals. He had escaped countless traps, outsmarted many predators, and always managed to find the best hunting grounds.</p>`,
                right: `<p>One golden afternoon, as berry bushes ripened under the sun's warm gaze, Viktor caught scent of something extraordinary—a vineyard far beyond the meadow, heavy with grapes so plump and purple they seemed to burst with sweetness.</p>
                <p>The fox's mouth watered as tales of the vineyard's legendary grapes filled his mind. "These must be the most delicious in all creation," he thought, already plotting his midnight feast.</p>`
            },
            {
                left: `<p>That night, under a moon like spilled milk across velvet sky, Viktor approached the vineyard stealthily. The grapes hung in tantalizing clusters, perfectly ripe and irresistibly sweet-scented.</p>
                <p>With a mighty leap, he cleared the fence and landed in the midst of paradise. But reaching the nearest cluster required another jump, one that would test even his legendary agility.</p>`,
                right: `<p>Three times he sprang, each jump bringing him tantalizingly close to the juicy grapes. But each time, his outstretched claws grasped only empty air. The clusters dangled just out of reach, mocking him with their ripeness.</p>
                <p>By the fourth attempt, Viktor was tiring, his breathing heavy and his dignity bruised. "How can this be?" he thought angrily. "I, the cleverest fox in the forest, cannot reach these simple grapes?"</p>`
            },
            {
                left: `<p>As dawn gilded the horizon with pink and gold, Viktor finally admitted defeat. With one final furious glance at the unreachable grapes, he turned and slunk away, his stomach rumbling and his pride wounded.</p>
                <p>Back in the meadow, he couldn't bear the thought of his fellow animals knowing of his failure. Instead, he decided to turn defeat into triumph. He'd make these grapes seem worthless—so the others wouldn't feel jealous of what he'd "chosen" not to eat.</p>`,
                right: `<p>Later that morning, as woodland animals gathered for morning chat, Viktor swaggered up with an air of supreme satisfaction. "Good morning, friends! You won't believe the adventure I had last night!"</p>
                <p>"Do tell!" chorused the rabbits and squirrels, their curiosity piqued.</p>
                <p>"I discovered grapes!" Viktor exclaimed dramatically. "Vine after vine, cluster after cluster of the most magnificent grapes you'd ever see!"</p>`
            },
            {
                left: `<p>The crowd murmured with interest, but Viktor waved his paw dismissively. "Oh, they looked quite tempting at first glance. Purple and plump, you'd think they were specially grown for foxes from paradise itself."</p>
                <p>Then came his masterpiece. "But imagine my <span class="emphasis">disappointment</span> when I tasted them!" he declared, scrunching his face in pretended disgust. "Sour! Hideously sour! Not at all like proper grapes should be. I had only one tiny taste before I realized they were completely unfit for consumption!"</p>`,
                right: `<p>The listening animals exchanged confused glances. Grapes soured by the time of year? Was that possible? But Victor's reputation as the forest's most discerning fox made them doubt their suspicions.</p>
                <p>"Well, I suppose you're right," said old Roger the wise old badger. "Not all fruit ripens to perfection. Thanks for the warning, Viktor!"</p>
                <p>As the animals dispersed, whispering about the mysterious sour grapes of the distant vineyard, Viktor congratulated himself on his quick thinking. He had preserved his dignity, after all.</p>`
            },
            {
                left: `<p>That night, as foxes and badgers and rabbits hunted for sweeter berries and fruits in familiar meadows, Viktor returned alone to the vineyard. The grapes still hung in perfect clusters, just as unreachable as before.</p>
                <p>But as he gazed longingly at the fruit he had <span class="emphasis">so cleverly degraded</span>, a quiet thought crept into his clever mind: was it better to hunger quietly, or to admit that some treasures simply lie beyond our reach?</p>`,
                right: `<p>Viktor the clever fox learned an important lesson that moonlit night. While intelligence and cunning open many doors, sometimes the universe places dreams just beyond our grasp. And though his quick wit saved his reputation, he also learned that pretending sourness doesn't make grapes any sweeter.</p>
                <p>The forest animals continued to respect Viktor for his wisdom, never realizing that the grapes he dismissed so passionately were the very ones he longed for most secretly.</p>
                <p><strong>MORAL: We often pretend things are worthless when they are simply out of reach, and true happiness comes from accepting what is attainable rather than craving what isn't.</strong></p>`
            }
        ]
    },
    science: {
        title: "The Time-Freezing Hamster",
        pages: [
            {
                left: `<h2>The Time-Freezing Hamster</h2>
                <p class="author-credit">By <span class="story-author">Alex Johnson</span></p>
                <p>Dr. Fuzzybottom wasn't your typical scientist. Okay, he was a hamster. But he had big dreams!</p>
                <p>"One day I'll invent something amazing!" Dr. Fuzzybottom squeaked, spinning his tiny hamster wheel tirelessly.</p>
                <p>His invention: the <span class="highlight">Time-Freezing Cheese Wheel</span>! Made with quantum physics, string theory, and lots of cheese.</p>`,
                right: `<p>The big test day arrived. Dr. Fuzzybottom took a deep breath (or as deep as a hamster could manage) and pressed the big red button on his Time-Freezing Cheese Wheel.</p>
                <p>"It worked!" he squeaked in amazement. Everything froze—clocks stopped ticking, birds hung motionless in mid-air, and even his water bottle refused to drip.</p>
                <p>Perfect! Now he had all the time in the world to eat his cheese. And nap. Mostly nap.</p>`
            },
            {
                left: `<p>But hamster nature took over. Dr. Fuzzybottom couldn't stop nibbling at his invention! One tiny bite of the wheel, and WHOOSH—the Time-Freezing field became unstable.</p>
                <p>Suddenly, time wasn't frozen—it was randomly jumping! Breakfast would be dinner, school would be bedtime, and bedtime would be... well, more bedtime.</p>`,
                right: `<p>People were getting confused:</p>
                <p><span class="emphasis">"Wait—wasn't it just lunchtime?"</span> someone shouted.</p>
                <p><span class="emphasis">"Why are the leaves falling up?"</span> another asked.</p>
                <p>Dr. Fuzzybottom tried to fix it, but in his panic, he ate even more of his invention! Now time was chaos!</p>`
            },
            {
                left: `<p>With great willpower (and an empty stomach), Dr. Fuzzybottom held back from further nibbling. Instead, he rolled his Time-Freezing Wheel toward the frozen lab equipment.</p>
                <p>"Think, think, think!" he nervous-squeaked. He needed a force field reversal! A temporal flux capacitor! Something science-y!</p>
                <p>Finally, he rolled the wheel into the reactor core. BZZZZZ! The field reversed itself!</p>`,
                right: `<p>Time began flowing normally again. Birds continued their songs, clocks resumed ticking, and hamster wheels kept spinning perfectly.</p>
                <p>Dr. Fuzzybottom became a hero. Governments offered him nuts, universities wanted his Nobel prize... er, Nobel pellet.</p>
                <p>But in his heart, Dr. Fuzzybottom knew the real lesson: sometimes science works best with an empty tummy and clear thinking!</p>`
            },
            {
                left: `<p>From that day on, Dr. Fuzzybottom never invented anything edible again. Instead, he focused on safer experiments: quantum tunneling through popcorn, and nuclear fusion through acorn storage.</p>
                <p>And whenever anyone asked about time travel, he'd just squeak, "Trust me—keep science and snacks separate!"</p>`,
                right: `<p><strong>THE LESSON: Great science requires discipline, focus, and knowing when not to eat your own inventions!</strong></p>
                <p><strong>THE END</strong></p>`
            }
        ]
    },
    fantasy: {
        title: "The Wizard Who Forgot His Spells",
        pages: [
            {
                left: `<h2>The Wizard Who Forgot His Spells</h2>
                <p class="author-credit">By <span class="story-author">Alex Johnson</span></p>
                <p>Once upon a time, in the magical kingdom of Spellcaster City, there lived a wizard named <span class="highlight">Zoolgump</span>. He was the most forgetful wizard in the entire enchanted forest.</p>
                <p>"Abracadabra... um... alakazam?" Zoolgump would mumble during spells.</p>
                <p>His tower had sticky notes everywhere: "Don't wear pointy hat upside down" "Magic wand goes in RIGHT pocket" "Don't feed dragons after midnight."</p>`,
                right: `<p>One fateful day, the Wicked Witch arrived to challenge Zoolgump to a <span class="highlight">Great Wizard Duel</span>. The winner would rule all the magical lands!</p>
                <p>"I'll defeat you so easily!" the witch cackled. "My potion-book is memorized perfectly!"</p>
                <p>Zoolgump gulped. "Um... my spells are on sticky notes... somewhere."</p>`
            },
            {
                left: `<p>The duel began with a simple spell-off. The witch threw a fireball spell—WHOOSH! Zoolgump fumbled through his robes.</p>
                <p>"Fire resistance spell... ah, here it is!" He read from a crumpled note: "Abracadabra shield-a-fire magic-light!"</p>
                <p>Poof! A giant umbrella appeared, extinguishing the fire perfectly. The crowd cheered!</p>`,
                right: `<p>The witch narrowed her eyes. "That was luck! Try this: fingers-to-bananas transformation!"</p>
                <p>Zoolgump's hands started turning yellow! He frantically searched: "Banana reversal spell... I know it's here somewhere!"</p>
                <p>Under a candy wrapper, he found it: "Fingers back to normal, alakazoom bakaloodum!" Peel! His hands returned to normal, but now they smelled like bananas.</p>`
            },
            {
                left: `<p>The Witch was furious. "Now for my ultimate spell: Dragon Summoning Storm!" Dark clouds formed, thunder rumbled, and a mighty dragon appeared!</p>
                <p>"Arise, my scaly ally!" the witch commanded. The dragon roared mightily, breathing flames that lit up the sky.</p>
                <p>Zoolgump had one last sticky note. Would it be enough?</p>`,
                right: `<p>"Dragon compassion spell... emergency use only!" Zoolgump read dramatically.</p>
                <p>"Compassion for what?" the witch sneered.</p>
                <p>"For pizzas!" Zoolgump shouted. "Pepperoni love-spell magic-delicious!"</p>
                <p>The dragon paused, sniffed the magical pizza aroma, and transformed into the friendliest creature ever. It gave Zoolgump's hat a friendly nudge!</p>`
            },
            {
                left: `<p>The duel was over. The Wicked Witch had been defeated by creativity, quick thinking, and the power of emergency sticky notes!</p>
                <p>"You won by being clever," the defeated witch admitted. "Memorizing spells is good, but thinking on your feet is better."</p>
                <p>King Zoolgump became the most beloved wizard ever. His sticky notes became national treasures.</p>`,
                right: `<p>And remember: even forgetful wizards can become great ones with creativity and preparation!</p>
                <p><strong>THE MORAL: Intelligence isn't about memory—it's about creativity and resourcefulness!</strong></p>
                <p><strong>THE END</strong></p>`
            }
        ]
    }
};

// Story generator that creates stories based on user input topic
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
    const mysteryTemplates = [
        // Template 1: Detective Mystery
        {
            title: `The Detective and the Mystery of ${topic}`,
            pages: [
                {
                    left: `<h2>The Detective and the Mystery of ${topic}</h2>
                    <p class="author-credit">By ${authorName}</p>
                    <p>Detective <span class="highlight">Sarah Midnight</span> thought she knew every trick in the book—until she received the enigmatic package containing information about ${topic}.</p>
                    <p>"This changes everything," she whispered, as strange symbols and codes spilled across her desk. The package came with a single warning: "Do not investigate ${topic}."</p>`,
                    right: `<p>Sarah couldn't resist. That very night, she began her investigation, following faint clues that led through <span class="emphasis">forbidden alleys</span> and computerized dead ends.</p>
                    <p>Each discovery revealed layers of complexity—${topic} wasn't just a subject, but a <span class="highlight">living puzzle</span> that seemed to evolve with every question asked.</p>`
                },
                {
                    left: `<p>In an abandoned warehouse on the city's outskirts, Sarah met an informant who whispered terrible secrets about ${topic}. "It's not what you think," the mysterious figure warned, glancing nervously at shadows.</p>
                    <p>But before Sarah could learn more, the informant vanished into the mist, leaving behind only a cryptic message carved into the wooden floor.</p>`,
                    right: `<p>Sarah continued her pursuit, discovering that ${topic} connected powerful interests who would do anything to keep it secret. Corporations, governments, and shadowy figures all seemed to converge around this single, burning question.</p>
                    <p>As the threats mounted, Sarah found herself racing against time to uncover the truth before those who guarded ${topic} found her first.</p>`
                },
                {
                    left: `<p>The confrontation came in a thunderstorm, in an ancient library where the truth about ${topic} was finally revealed to Sarah. The revelations were <span class="highlight">shocking</span>—${topic} held the power to transform society itself.</p>
                    <p>But knowing the truth meant enduring great sacrifice. Sarah had to choose whether to share the knowledge or protect it forever.</p>`,
                    right: `<p>Sarah chose courage over safety. She released the information about ${topic}, and the world underwent a <span class="emphasis">quiet revolution</span>. Though many resisted change, others embraced the truth about ${topic}, leading humanity toward a more enlightened future.</p>
                    <p><strong>THE END</strong></p>
                    <p>The pursuit of truth is always worth the risk, for it enriches both the seeker and the world.</p>`
                }
            ]
        },
        // Template 2: Sci-Fi Mystery
        {
            title: `Galactic Enigma: The Mystery of ${topic}`,
            pages: [
                {
                    left: `<h2>Galactic Enigma: The Mystery of ${topic}</h2>
                    <p class="author-credit">By ${authorName}</p>
                    <p>Captain <span class="highlight">Nova Steele</span> of the starship Quantum believed she had seen it all—black holes, alien civilizations, temporal rifts. But nothing prepared her for the mystery of ${topic}.</p>
                    <p>The distress signal came from an abandoned space station: "Warning: ${topic} anomaly detected. Avoid contact." Nova ignored the warning, as daring explorers always do.</p>`,
                    right: `<p>Boarding the derelict station, Nova's team discovered <span class="emphasis">impossible readings</span>—radiation that defied physics, and an energy signature unlike anything in the galactic database.</p>
                    <p>${topic} wasn't just a phenomenon—it was <span class="highlight">awake</span>, responding to their presence with subtle shifts in gravity and temperature.</p>`
                },
                {
                    left: `<p>As they explored deeper, the team encountered holographic images depicting ancient beings who had studied ${topic} millennia ago. Their warnings echoed through time: "${topic} is understanding itself. It hungers for curiosity."</p>
                    <p>The station's AI, corrupted by ${topic}, spoke in riddles: "We are not alone. We are not understandable. We are not safe."`,
                    right: `<p>The mystery evolved as ${topic} began <span class="emphasis">communicating</span>. Images flashed in Nova's mind—visions of distant galaxies, parallel universes, and the true nature of existence itself.</p>
                    <p>${topic} wasn't a threat, but a teacher. It sought to share forbidden knowledge that could elevate humanity to godlike status.</p>`
                },
                {
                    left: `<p>But this knowledge came with a terrible cost. Several crew members began experiencing the phenomenon Nova called "<span class="highlight">enlightenment sickness</span>." They saw patterns in everything, hearing the screams of subatomic particles, feeling the spin of distant stars.</p>
                    <p>Nova faced an impossible choice: destroy ${topic} or embrace the transformation it offered.</p>`,
                    right: `<p>Nova chose a middle path. She released a modified version of ${topic} to humanity—curious knowledge without the dangerous enlightenment. The galaxy changed forever, but humanity evolved gradually, wisely.</p>
                    <p><strong>THE END</strong></p>
                    <p>Some mysteries aren't meant to be fully understood. They exist to remind us that wonder is its own reward.</p>`
                }
            ]
        },
        // Template 3: Childhood Mystery
        {
            title: `The Children's Quest: Unmasking ${topic}`,
            pages: [
                {
                    left: `<h2>The Children's Quest: Unmasking ${topic}</h2>
                    <p class="author-credit">By ${authorName}</p>
                    <p><span class="highlight">Jamie</span> and <span class="highlight">Alex</span> were unlucky enough to be the neighbors of Mr. Grimble, the strict old man who ran the museum. Or so they thought.</p>
                    <p>Everything changed when they heard Mr. Grimble muttering about "${topic} must be protected" while dusting an ancient artifact. There were no such exhibits in the museum...</p>`,
                    right: `<p>The children's curiosity piqued, they decided to investigate. Sneaking into Mr. Grimble's garage after dark, they discovered something <span class="emphasis">astonishing</span>—a hidden laboratory filled with glowing crystals and humming machines.</p>
                    <p>At the center of it all was ${topic}, a pulsing orb that seemed to contain entire worlds within its surface.</p>`
                },
                {
                    left: `<p>The orb spoke without words—ideas flowed directly into the children's minds. Visions of ${topic} revealed it to be an ancient guardian from another time, sent to protect Earth from cosmic threats.</p>
                    <p>But Mr. Grimble wasn't protecting ${topic}—he was using its power for his own experiments!</p>`,
                    right: `<p>The children learned that ${topic} had chosen them because of their pure curiosity and lack of fear. They were meant to succeed where adults would fail due to their ambition.</p>
                    <p>With the orb's guidance, Jamie and Alex devised a clever plan to both stop Mr. Grimble and secure ${topic}'s safety.</p>`
                },
                {
                    left: `<p>The confrontation was equal parts terrifying and hilarious. Mr. Grimble, caught in his own energy field, found his skin turning <span class="highlight">iridescent green</span>. The children, equipped with the orb's protective aura, were untouchable.</p>
                    <p>"Why?" the children demanded. "Why would you use ${topic} for selfish reasons?"</p>`,
                    right: `<p>Mr. Grimble confessed his jealousy—he wanted ${topic}'s power to relive his youth. But ${topic} showed him that real power comes from service, not selfishness.</p>
                    <p>From that day on, Jamie and Alex became ${topic}'s guardians, using its knowledge to help others while keeping it safe from those who would misuse it.</p>
                    <p><strong>THE END</strong></p>
                    <p>Mysteries sometimes choose unlikely heroes—the curious, the brave, the pure of heart.</p>`
                }
            ]
        }
    ];

    return mysteryTemplates[Math.floor(Math.random() * mysteryTemplates.length)];
}

function generateAdventureStory(topic, authorName) {
    const adventureTemplates = [
        // Template 1: Treasure Quest
        {
            title: `Quest for ${topic}`,
            pages: [
                {
                    left: `<h2>Quest for ${topic}</h2>
                    <p class="author-credit">By ${authorName}</p>
                    <p>Alex found an ancient map that spoke of ${topic} - a legendary treasure lost to time. Without hesitation, Alex gathered a team of brave adventurers.</p>
                    <p>The map led them through treacherous jungles, across stormy seas, and into forgotten temples. Each step brought them closer to ${topic}.</p>`,
                    right: `<p>As they delved deeper, they faced dangerous creatures, solved impossible puzzles, and outsmarted cunning traps. ${topic} seemed almost within reach.</p>
                    <p>But the greatest challenge was the guardian who protected ${topic}. Would they prove worthy?</p>`
                },
                {
                    left: `<p>In a breathtaking final confrontation, Alex and the team faced the guardian of ${topic}. It was a battle of wits, courage, and determination.</p>
                    <p>With teamwork and clever thinking, they overcame every obstacle. ${topic} was finally theirs!</p>`,
                    right: `<p>But the true value of ${topic} wasn't material wealth—it was the journey itself and the friendships forged along the way.</p>
                    <p><strong>THE END</strong></p>
                    <p>The greatest treasures aren't found—they're discovered in the courage to seek and the wisdom to share.</p>`
                }
            ]
        },
        // Template 2: Survival Adventure
        {
            title: `Surviving ${topic}`,
            pages: [
                {
                    left: `<h2>Surviving ${topic}</h2>
                    <p class="author-credit">By ${authorName}</p>
                    <p>Dr. Elena Ramirez's research vessel was investigating reports of ${topic} in the Pacific. Everything was going according to plan—until the storm hit.</p>
                    <p>Lightning shattered the mast, waves sank their lifeboats, and somehow Elena found herself stranded with only <span class="highlight">Captain Marcus</span>, the ship's skeptical sailor.</p>`,
                    right: `<p>"We should have listened to the legends," Elena muttered as they fought through the chaos of ${topic}. Ancient warnings spoke of its power, its unpredictability.</p>
                    <p>But ${topic} wasn't just destructive—it was <span class="emphasis">alive</span>, responding to their presence in strange, almost intelligent ways.</p>`
                },
                {
                    left: `<p>As they pushed deeper into the mystery of ${topic}, they discovered it wasn't a curse to be survived, but a force to be understood. Ancient civilizations had learned to respect it, even harness it.</p>
                    <p>With Elena's scientific knowledge and Marcus's survival instincts, they navigated the perils of ${topic}.</p>`,
                    right: `<p>The ultimate test came when they faced the heart of ${topic} itself—a maelstrom of energy that could either destroy or transform them. They chose connection over fear.</p>
                    <p>Surviving ${topic} taught them more than just endurance—it showed them the profound interconnectedness of all things.</p>
                    <p><strong>THE END</strong></p>
                    <p>Some adventures aren't about conquering forces—they're about learning to live with them.</p>`
                }
            ]
        },
        // Template 3: Hero's Journey
        {
            title: `The Hero's Path: Understanding ${topic}`,
            pages: [
                {
                    left: `<h2>The Hero's Path: Understanding ${topic}</h2>
                    <p class="author-credit">By ${authorName}</p>
                    <p>Young apprentice <span class="highlight">Roran Hawke</span> had always dreamed of becoming an Elven Ranger, but his destiny was tied to ${topic}, an ancient artifact lost during the Dragon Wars.</p>
                    <p>Legend spoke of ${topic}'s dual nature—it could be weapon or wisdom, depending on who possessed it. Roran was warned: "Those who seek ${topic} find either enlightenment or ruin."</p>`,
                    right: `<p>The journey challenged everything Roran believed. Ruins whispered forgotten histories, guardian spirits tested his worth, and even trusted companions betrayed their alliances.</p>
                    <p>Each obstacle revealed not just external threats, but <span class="emphasis">internal ones</span>. Roran's arrogance crumbled, his fears surfaced, his strength grew through adversity.</p>`
                },
                {
                    left: `<p>The climactic confrontation wasn't about defeating enemies—it was about embracing ${topic}'s true nature. Roran learned that ${topic} wasn't an object to control, but a source of wisdom to embody.</p>
                    <p>The artifact chose its owners, and Roran had earned that choice through humility, curiosity, and compassion.</p>`,
                    right: `<p>By journey's end, Roran wasn't just a ranger, but a guardian. ${topic}'s power flowed through him as wisdom and strength, inspiring others to seek their own paths of understanding.</p>
                    <p><strong>THE END</strong></p>
                    <p>The greatest adventures aren't about destinations—they're about who we become along the way.</p>`
                }
            ]
        }
    ];

    return adventureTemplates[Math.floor(Math.random() * adventureTemplates.length)];
}

function generateComedyStory(topic, authorName) {
    // Dynamic story generation - create story elements on the fly
    const characters = ['Alex', 'Jordan', 'Sam', 'Riley', 'Taylor', 'Chris', 'Jamie', 'Morgan', 'Casey', 'Drew'];
    const disasters = ['spilling coffee everywhere', 'accidentally setting off fireworks', 'getting stuck in a costume', 'causing a power outage', 'creating giant bubbles', 'summoning a flock of pigeons', 'speaking only in memes', 'summoning spinach-eating mice'];

    const character = characters[Math.floor(Math.random() * characters.length)];
    const disaster1 = disasters[Math.floor(Math.random() * disasters.length)];
    const disaster2 = disasters[Math.floor(Math.random() * disasters.length)];
    const disaster3 = disasters[Math.floor(Math.random() * disasters.length)];

    const lessons = [
        'Sometimes the best lessons come from spectacular failures',
        'Innovation requires patience and testing',
        'Life is full of unexpected adventures',
        'Creativity often comes from chaos',
        'The journey matters more than perfection'
    ];

    const lesson = lessons[Math.floor(Math.random() * lessons.length)];

    return {
        title: `The ${character}'s ${topic} Disaster`,
        pages: [
            {
                left: `<h2>The ${character}'s ${topic} Disaster</h2>
                <p class="author-credit">By ${authorName}</p>
                <p><span class="highlight">${character}</span> was convinced that learning about ${topic} would finally make them the coolest kid in school.</p>
                <p>"This project will be legendary!" ${character} declared, gathering supplies and determination. Famous last words.</p>`,
                right: `<p>The first problem occurred when ${character} tried to create a ${topic} presentation. Instead of learning about ${topic}, chaos ensued. Literally.</p>
                <p>${character} ended up <span class="emphasis">${disaster1}</span>, and the project went spectacularly wrong before it even began.</p>`
            },
            {
                left: `<p>Undeterred, ${character} tried again the next day, this time with a different approach. "I'll make it educational AND entertaining!"</p>
                <p>But ${topic} had other plans. Things escalated when ${character} accidentally <span class="emphasis">${disaster2}</span>, creating the biggest disaster yet.</p>`,
                right: `<p>By day three, the entire neighborhood was involved. When ${character} attempted one final breakthrough with ${topic}, disaster struck again: <span class="emphasis">${disaster3}</span>.</p>
                <p>Teachers, friends, and even the delivery person became part of the legendary ${topic} catastrophe.</p>`
            },
            {
                left: `<p>Weeks later, ${character} finally completed the ${topic} project—but not in the way anyone expected. The disaster taught everyone more about teamwork, creativity, and persistence than any textbook ever could.</p>
                <p>"I may not have mastered ${topic}," ${character} admitted, "but I mastered surviving disasters."</p>`,
                right: `<p>The ${topic} Presentation became legendary. Years later, people still talk about ${character}'s creation. It wasn't about academic success—it was about embracing life's unpredictable adventures.</p>
                <p><strong>THE MORAL: ${lesson}</strong></p>
                <p><strong>THE END</strong></p>`
            }
        ]
    };
}
