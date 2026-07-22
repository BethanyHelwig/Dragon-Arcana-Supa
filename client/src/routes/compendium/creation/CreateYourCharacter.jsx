export default function CreateYourCharacter(){
    return(
        <div>
            <h2>Create Your Character</h2>
            <p>Here are the steps to make a character; each step is
                explored in detail:</p>
            <ol>
                <li><strong>Choose a Class.</strong> Every adventurer is a member
                    of a class. A class broadly describes a character’s
                    vocation, special talents, and favored tactics.</li>
                <li><strong>Determine Origin.</strong> A character’s origin includes
                    two elements: background and species. How did
                    the character spend the years leading up to a life
                    of adventure? Who are the character’s ancestors?
                    You can also choose your character’s languages.</li>
                <li><strong>Determine Ability Scores.</strong> Much of what your
                    character does in the game depends on the character’s
                    six abilities.</li>
                <li><strong>Choose an Alignment.</strong> Alignment is a shorthand
                    for your character’s moral compass.</li>
                <li><strong>Fill in Details.</strong> Using the choices you’ve made, fill
                    in the remaining details on your character sheet.</li>
            </ol>

            <h3>Step 1: Choose Class</h3>
            <div className="compendium-divider"></div>
            <p>Choose a class, and write it on your character sheet.
                The Class Overview table summarizes the classes.
                See “Classes” for the classes’ details.</p>
            <h4>Class Overview</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Likes ...</th>
                        <th scope="col">Primary Ability</th>
                        <th scope="col">Complexity</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Barbarian</td>
                        <td>Battle</td>
                        <td>Strength</td>
                        <td>Average</td>
                    </tr>
                    <tr>
                        <td>Bard</td>
                        <td>Performing</td>
                        <td>Charisma</td>
                        <td>High</td>
                    </tr>                    
                    <tr>
                        <td>Cleric</td>
                        <td>Gods</td>
                        <td>Wisdom</td>
                        <td>Average</td>
                    </tr>                    
                    <tr>
                        <td>Druid</td>
                        <td>Nature</td>
                        <td>Wisdom</td>
                        <td>High</td>
                    </tr>                    
                    <tr>
                        <td>Fighter</td>
                        <td>Weapons</td>
                        <td>Strength or Dexterity</td>
                        <td>Low</td>
                    </tr>                    
                    <tr>
                        <td>Monk</td>
                        <td>Unarmed combat</td>
                        <td>Dexterity and Wisdom</td>
                        <td>High</td>
                    </tr>                    
                    <tr>
                        <td>Paladin</td>
                        <td>Defense</td>
                        <td>Strength and Charisma</td>
                        <td>Average</td>
                    </tr>                    
                    <tr>
                        <td>Ranger</td>
                        <td>Survival</td>
                        <td>Dexterity and Wisdom</td>
                        <td>Average</td>
                    </tr>                    
                    <tr>
                        <td>Rogue</td>
                        <td>Stealth</td>
                        <td>Dexterity</td>
                        <td>Low</td>
                    </tr>                    
                    <tr>
                        <td>Sorcerer</td>
                        <td>Power</td>
                        <td>Charisma</td>
                        <td>High</td>
                    </tr>                    
                    <tr>
                        <td>Warlock</td>
                        <td>Occult lore</td>
                        <td>Charisma</td>
                        <td>High</td>
                    </tr>                    
                    <tr>
                        <td>Wizard</td>
                        <td>Spellbooks</td>
                        <td>Intelligence</td>
                        <td>Average</td>
                    </tr>
                </tbody>
            </table>

            <h4>Write Your Level</h4>
            <p>Write your character’s level on your character
                sheet. Typically, a character starts at level 1 and
                advances in level by adventuring and gaining Experience
                Points (XP).</p>
            <p><strong>Write Your XP.</strong> Also record your Experience
                Points. A level 1 character has 0 XP.</p>
            <p><strong>Starting at a Higher Level.</strong> Your GM might start
                you at a higher level. If you start at level 3 or higher,
                write your chosen subclass on your character sheet.
                See the “Starting at Higher Levels” section later in
                “Character Creation” for more information.</p>
            
            <h4>Note Armor Training</h4>
            <p>Your class might give you training with certain
                categories of armor. Note your armor training on
                your character sheet. Armor training with a kind of
                armor means you can wear that armor effectively,
                gaining defensive bonuses from it. The categories of
                armor are described in “Equipment.”</p>

            <h3>Step 2: Character Origin</h3>
            <div className="compendium-divider"></div>
            <p>Determining your character’s origin involves choosing
                a background, a species, and two languages.</p>
            <p>A character’s background represents the place
                and occupation that were most formative for the
                character. The combination of background, species,
                and languages provides fertile soil for your imagination
                as you ponder your character’s earliest days.</p>
            
            <h4>Choose a Background</h4>
            <p>Choose your character’s background, and write it on
                your character sheet. You can choose any of the backgrounds
                detailed in “Character Origins,” and your GM
                might offer additional backgrounds as options.</p>
            <p>The background you choose influences step 3,
                when you determine your character’s ability scores.
                If you’re having trouble choosing, the Ability Scores
                and Backgrounds table shows which backgrounds
                benefit which ability scores. Look for your class’s
                primary ability there.</p>
            <h4>Ability Scores and Backgrounds</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Ability</th>
                        <th scope="col">Background</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Strength</td>
                        <td>Soldier</td>
                    </tr>
                    <tr>
                        <td>Dexterity</td>
                        <td>Soldier</td>
                    </tr>
                    <tr>
                        <td>Constitution</td>
                        <td>Soldier</td>
                    </tr>
                    <tr>
                        <td>Intelligence</td>
                        <td>Acolyte</td>
                    </tr>
                    <tr>
                        <td>Wisdom</td>
                        <td>Acolyte</td>
                    </tr>
                    <tr>
                        <td>Charisma</td>
                        <td>Acolyte</td>
                    </tr>
                </tbody>
            </table>

            <p><strong>Record Your Feat.</strong> A background gives you a feat,
                which grants your character particular capabilities.
                Feats are detailed in “Feats.” Write the feat on your
                character sheet.</p>
            <p><strong>Note Proficiencies.</strong> Your background gives proficiency
                in two skills and with one tool. Record this
                information on your character sheet.</p>
            <p>Your class also gives proficiencies. Check your
                class description in “Classes” and note the proficiencies
                on your character sheet.</p>
            <p>The features table in your class description shows
                your Proficiency Bonus (described in “Playing the
                Game”), which is +2 for a level 1 character. Note this
                number on your character sheet. You’ll fill in other
                numbers connected to these proficiencies in step 5.</p>

            <h4>Choose Starting Equipment</h4>
            <p>Your background and class both provide starting
                equipment. Any coins that you gain at this step
                can be immediately spent on equipment from “Equipment.”</p>
            <p>Record your chosen equipment on your character
                sheet. Equipment is described in “Equipment,” but
                for now you can just write it all down and look up
                the specifics in “Equipment” later. Note any coins
                you have left after purchasing your equipment.</p>

            <h4>Choose a Species</h4>
            <p>Choose a species for your character. The following
                species options are detailed in “Character Origins”:
                Dragonborn, Dwarf, Elf, Gnome, Goliath, Halfling,
                Human, Orc, and Tiefling. Once you’ve chosen a species,
                write it on your character sheet. Then record
                your species’ traits.</p>
            <p>Your character’s size and Speed are determined
                by the character’s species; record these in the appropriate
                places on your character sheet as well
                (you may write just the first letter of your size).</p>
            
            <h4>Imagine Your Past and Present</h4>
            <p>Let your character’s background and species inspire
                how you imagine their past. That past fed into the
                character’s present. With that in mind, consider answers
                to the following questions as your character:</p>
            <ul>
                <li>Who raised you?</li>
                <li>Who was your dearest childhood friend?</li>
                <li>Did you grow up with a pet?</li>
                <li>Have you fallen in love? If so, with whom?</li>
                <li>Did you join an organization, such as a guild or religion?
                    If so, are you still a member of it?</li>
                <li>What elements of your past inspire you to go on
                    adventures now?</li>
            </ul>

            <h4>Choose Languages</h4>
            <p>Your character knows at least three languages:
                Common plus two languages you roll or choose
                from the Standard Languages table. Knowledge of a
                language means your character can communicate in
                it, read it, and write it. Your class and other features
                might also give you languages.</p>
            <p>The Standard Languages table lists languages that
                are widespread in the setting. Every player character
                knows Common. The other standard languages
                originated with the first members of the most
                prominent species in the setting and have since
                spread widely.</p>
            <h4>Standard Languages</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">1d12</th>
                        <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>--</td>
                        <td>Common</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Common Sign Language</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Draconic</td>
                    </tr>
                    <tr>
                        <td>3–4</td>
                        <td>Dwarvish</td>
                    </tr>
                    <tr>
                        <td>5–6</td>
                        <td>Elvish</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Giant</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Gnomish</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>Goblin</td>
                    </tr>
                    <tr>
                        <td>10-11</td>
                        <td>Halfling</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Orc</td>
                    </tr>
                </tbody>
            </table>
            <p>The Rare Languages table lists languages that are
                either secret or derived from other planes of existence
                and thus less widespread in the worlds of the
                Material Plane. Some features let a character learn a
                rare language.</p>
            <h4>Rare Languages</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abyssal</td>
                    </tr>
                    <tr>
                        <td>Celestial</td>
                    </tr>
                    <tr>
                        <td>Deep Speech</td>
                    </tr>
                    <tr>
                        <td>Druidic</td>
                    </tr>
                    <tr>
                        <td>Infernal</td>
                    </tr>
                    <tr>
                        <td>Primordial*</td>
                    </tr>
                    <tr>
                        <td>Sylvan</td>
                    </tr>
                    <tr>
                        <td>Thieves’ Cant</td>
                    </tr>
                    <tr>
                        <td>Undercommon</td>
                    </tr>
                </tbody>
            </table>
            <p>*Primordial includes the Aquan, Auran, Ignan, and Terran dialects.
                Creatures that know one of these dialects can communicate with
                those that know a different one.</p>

            <h3>Step 3: Ability Scores</h3>
            <div className="compendium-divider"></div>
            <p>To determine your character’s ability scores, you
                first generate a set of six numbers using the instructions
                below and then assign them to your six abilities.
                “Playing the Game” explains what each ability means.</p>
            
            <h4>Generate Your Scores</h4>
            <p>Determine your ability scores by using one of the
                following three methods. Your GM might prefer you
                to use a particular one.</p>
            <p><strong>Standard Array.</strong> Use the following six scores for
                your abilities: 15, 14, 13, 12, 10, 8.</p>
            <p><strong>Random Generation.</strong> Roll four d6s and record
                the total of the highest three dice. Do this five more
                times, so you have six numbers.</p>
            <p><strong>Point Cost.</strong> You have 27 points to spend on your
                ability scores. The cost of each score is shown on
                the Ability Score Point Costs table. For example, a
                score of 14 costs 7 of your 27 points.</p>
            <h4>Ability Score Point Costs</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Score</th>
                        <th scope="col">Cost</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>8</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>2</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>4</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>5</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>9</td>
                    </tr>
                </tbody>
            </table>

            <h4>Assign Ability Scores</h4>
            <p>Once you’ve generated six scores, assign them to
                Strength, Dexterity, Constitution, Intelligence, Wisdom,
                and Charisma, keeping in mind your class’s
                primary ability. Fill in the ability modifiers as well.</p>
            <p>If you’re using the Standard Array option, consult
                the Standard Array by Class table for suggestions
                on where to assign scores for your character’s class.
                The table puts the highest scores in a class’s main
                abilities. If you used a different method to generate
                the scores, you may still use this table to guide
                where you place your highest and lowest scores.</p>
            <h4>Standard Array by Class</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Str.</th>
                        <th scope="col">Dex.</th>
                        <th scope="col">Con.</th>
                        <th scope="col">Int.</th>
                        <th scope="col">Wis.</th>
                        <th scope="col">Cha.</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Barbarian</td>
                        <td>15</td>
                        <td>13</td>
                        <td>14</td>
                        <td>10</td>
                        <td>12</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Bard</td>
                        <td>8</td>
                        <td>14</td>
                        <td>12</td>
                        <td>13</td>
                        <td>10</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Cleric</td>
                        <td>14</td>
                        <td>8</td>
                        <td>13</td>
                        <td>10</td>
                        <td>15</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Druid</td>
                        <td>8</td>
                        <td>12</td>
                        <td>14</td>
                        <td>13</td>
                        <td>15</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Fighter</td>
                        <td>15</td>
                        <td>14</td>
                        <td>13</td>
                        <td>8</td>
                        <td>10</td>
                        <td>12</td>
                    </tr>
                    <tr>
                        <td>Monk</td>
                        <td>12</td>
                        <td>15</td>
                        <td>13</td>
                        <td>10</td>
                        <td>14</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Paladin</td>
                        <td>15</td>
                        <td>10</td>
                        <td>13</td>
                        <td>8</td>
                        <td>12</td>
                        <td>14</td>
                    </tr>
                    <tr>
                        <td>Ranger</td>
                        <td>12</td>
                        <td>15</td>
                        <td>13</td>
                        <td>8</td>
                        <td>14</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>Rogue</td>
                        <td>12</td>
                        <td>15</td>
                        <td>13</td>
                        <td>14</td>
                        <td>10</td>
                        <td>8</td>
                    </tr>
                    <tr>
                        <td>Sorcerer</td>
                        <td>10</td>
                        <td>13</td>
                        <td>14</td>
                        <td>8</td>
                        <td>12</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Warlock</td>
                        <td>8</td>
                        <td>14</td>
                        <td>13</td>
                        <td>12</td>
                        <td>10</td>
                        <td>15</td>
                    </tr>
                    <tr>
                        <td>Wizard</td>
                        <td>8</td>
                        <td>12</td>
                        <td>13</td>
                        <td>15</td>
                        <td>14</td>
                        <td>10</td>
                    </tr>
                </tbody>
            </table>
            
            <h4>Adjust Ability Scores</h4>
            <p>After assigning your ability scores, adjust them according
                to your background. Your background lists
                three abilities; increase one of those scores by 2 and
                a different one by 1, or increase all three by 1. None
                of these increases can raise a score above 20.</p>
            <p>Some players like to increase their class’s primary
                ability, while others prefer to increase a low score.</p>

            <h4>Determine Ability Modifiers</h4>
            <p>Finally, determine your ability modifiers using the
                Ability Scores and Modifiers table. Write the modifier
                next to each of your scores.</p>
            <h4>Ability Scores and Modifiers</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Score</th>
                        <th scope="col">Modifier</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>3</td>
                        <td>−4</td>
                    </tr>
                    <tr>
                        <td>4–5</td>
                        <td>−3</td>
                    </tr>
                    <tr>
                        <td>6–7</td>
                        <td>−2</td>
                    </tr>
                    <tr>
                        <td>8–9</td>
                        <td>−1</td>
                    </tr>
                    <tr>
                        <td>10–11</td>
                        <td>+0</td>
                    </tr>
                    <tr>
                        <td>12–13</td>
                        <td>+1</td>
                    </tr>
                    <tr>
                        <td>14–15</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>16–17</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>18–19</td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>+5</td>
                    </tr>
                </tbody>
            </table>

            <h3>Step 4: Alignment</h3>
            <div className="compendium-divider"></div>
            <p>Choose your character’s alignment from the options
                below, and note it on your character sheet.</p>
            <p>The game assumes that player characters aren’t of
                an evil alignment. Check with your GM before making
                an evil character.</p>
            
            <h4>The Nine Alignments</h4>
            <p>A creature’s alignment broadly describes its ethical
                attitudes and ideals. Alignment is a combination of
                two factors: one identifies morality (good, evil, or
                neutral), and the other describes attitudes toward
                order (lawful, chaotic, or neutral).</p>
            <p>The summaries of the alignments below describe
                the typical behavior of a creature with that alignment;
                individuals can vary from that behavior.</p>
            <p><strong>Lawful Good (LG).</strong> Lawful Good creatures endeavor
                to do the right thing as expected by society.
                Someone who fights injustice and protects the innocent
                without hesitation is probably Lawful Good.</p>
            <p><strong>Neutral Good (NG).</strong> Neutral Good creatures do the
                best they can, working within rules but not feeling
                bound by them. A kindly person who helps others
                according to their needs is probably Neutral Good.</p>
            <p><strong>Chaotic Good (CG).</strong> Chaotic Good creatures act as
                their conscience directs with little regard for what
                others expect. A rebel who waylays a cruel baron’s
                tax collectors and uses the stolen money to help the
                poor is probably Chaotic Good.</p>
            <p><strong>Lawful Neutral (LN).</strong> Lawful Neutral individuals
                act in accordance with law, tradition, or personal
                codes. Someone who follows a disciplined rule of
                life—and isn’t swayed either by the demands of
                those in need or by the temptations of evil—is probably
                Lawful Neutral.</p>
            <p><strong>Neutral (N).</strong> Neutral is the alignment of those who
                prefer to avoid moral questions and don’t take sides,
                doing what seems best at the time. Someone who’s
                bored by moral debate is probably Neutral.</p>
            <p><strong>Chaotic Neutral (CN).</strong> Chaotic Neutral creatures
                follow their whims, valuing their personal freedom
                above all else. A scoundrel who wanders the land
                living by their wits is probably Chaotic Neutral.</p>
            <p><strong>Lawful Evil (LE).</strong> Lawful Evil creatures methodically
                take what they want within the limits of a code
                of tradition, loyalty, or order. An aristocrat exploiting
                citizens while scheming for power is probably Lawful Evil.</p>
            <p><strong>Neutral Evil (NE).</strong> Neutral Evil is the alignment of
                those who are untroubled by the harm they cause as
                they pursue their desires. A criminal who robs and
                murders as they please is probably Neutral Evil.</p>
            <p><strong>Chaotic Evil (CE).</strong> Chaotic Evil creatures act
                with arbitrary violence, spurred by their hatred or
                bloodlust. A villain pursuing schemes of vengeance
                and havoc is probably Chaotic Evil.</p>

            <div className="compendium-content-emphasis">
                <h3>Unaligned Creatures</h3>
                <p>Most creatures that lack the capacity for rational
                    thought don’t have alignments; they are unaligned.
                    Sharks are savage predators, for example, but they
                    aren’t evil; they are unaligned.</p>
            </div>

            <h3>Step 5: Character Creation Details</h3>
            <div className="compendium-divider"></div>
            <p>Now fill in the rest of your character sheet.</p>

            <h4>Record Class Features</h4>
            <p>Look at your class’s feature table in “Classes,” and
                write down the level 1 features. The class features
                are detailed there too.</p>
            <p>Some class features offer choices. Make sure to
                read all your features and make any offered choices.</p>

            <h4>Fill In Numbers</h4>
            <p>Note these numbers on your character sheet.</p>
            <p><strong>Saving Throws.</strong> For the saving throws you have
                proficiency in, add your Proficiency Bonus to the appropriate
                ability modifier and note the total. Some
                players also like to note the modifier for saving
                throws they’re not proficient in, which is just the
                relevant ability modifier.</p>
            <p><strong>Skills.</strong> For skills you have proficiency in, add your
                Proficiency Bonus to the ability modifier associated
                with that skill, and note the total. You might also
                wish to note the modifier for skills you’re not proficient
                in, which is just the relevant ability modifier.</p>
            <p><strong>Passive Perception.</strong> Sometimes your GM will determine
                whether your character notices something
                without asking you to make a Wisdom (Perception)
                check; the GM uses your Passive Perception instead.
                Passive Perception is a score that reflects a general
                awareness of your surroundings when you’re not
                actively looking for something. Use this formula to
                determine your Passive Perception score:</p>
            <p><strong>Passive Perception</strong> = 10 + Wisdom (Perception) check modifier</p>
            <p>Include all modifiers that apply to your Wisdom
                (Perception) checks. For example, if your character
                has a Wisdom of 15 and proficiency in the Perception
                skill, you have a Passive Perception of 14 (10 +
                2 for your Wisdom modifier + 2 for proficiency).</p>
            <p><strong>Hit Points.</strong> Your class and Constitution modifier
                determine your Hit Point maximum at level 1, as
                shown on the Level 1 Hit Points by Class table.</p>

            <h4>Level 1 Hit Points by Class</h4>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Class</th>
                        <th scope="col">Hit Point Maximum</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Barbarian</td>
                        <td>12 + Con. modifier</td>
                    </tr>
                    <tr>
                        <td>Fighter, Paladin, or Ranger</td>
                        <td>10 + Con. modifier</td>
                    </tr>
                    <tr>
                        <td>Bard, Cleric, Druid, Monk, Rogue, or Warlock</td>
                        <td>8 + Con. modifier</td>
                    </tr>
                    <tr>
                        <td>Sorcerer or Wizard</td>
                        <td>6 + Con. modifier</td>
                    </tr>
                </tbody>
            </table>
            <p>The character sheet includes room to note your
                current Hit Points when you take damage, as well as
                any Temporary Hit Points you might gain. There’s
                also space to track Death Saving Throws.</p>
            <p><strong>Hit Point Dice.</strong> Your class’s description tells you
                the die type of your character’s Hit Point Dice (or
                Hit Dice for short); write this on your character
                sheet. At level 1, your character has 1 Hit Die. You
                can spend Hit Dice during a Short Rest to recover
                Hit Points. Your character sheet also includes space
                to note how many Hit Dice you’ve spent.</p>
            <p><strong>Initiative.</strong> Write your Dexterity modifier in the
                space for Initiative on your character sheet.</p>
            <p><strong>Armor Class.</strong> Without armor or a shield, your
                base Armor Class is 10 plus your Dexterity modifier.
                If your starting equipment includes armor or a
                Shield (or both), calculate your AC using the rules in
                “Equipment.” A class feature might give you a different
                way to calculate your AC.</p>
            <p><strong>Attacks.</strong> In the Weapons & Damage Cantrips
                section of the character sheet, write your starting
                weapons. The attack roll bonus for a weapon with
                which you have proficiency is one of the following
                unless a weapon’s property says otherwise:</p>
            <p><strong>Melee attack bonus</strong> = Strength modifier + Proficiency Bonus</p>
            <p><strong>Ranged attack bonus</strong> = Dexterity modifier + Proficiency Bonus</p>
            <p>Look up the damage and properties of your
                weapons in “Equipment.” You add the same ability
                modifier you use for attacks with a weapon to your
                damage rolls with that weapon.</p>
            <p><strong>Spellcasting.</strong> Note both the saving throw DC for
                your spells and the attack bonus for attacks you
                make with them, using these formulas:</p>
            <p><strong>Spell save DC</strong> = 8 + spellcasting ability modifier + Proficiency Bonus</p>
            <p><strong>Spell attack bonus</strong> = spellcasting ability modifier + Proficiency Bonus</p>
            <p>Your spellcasting ability modifier for a spell is determined
                by whatever feature gives you the ability
                to cast the spell.</p>
            <p><strong>Spell Slots, Cantrips, and Prepared Spells.</strong> If
                your class gives you the Spellcasting or Pact Magic
                feature, your class features table shows the number
                of spell slots you have available, how many cantrips
                you know, and how many spells you can prepare.
                Choose your cantrips and prepared spells, and note
                them—along with your number of spell slots—on
                your character sheet.</p>
        </div>
    )
}