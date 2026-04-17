export default function MonstersOverview(){
    return (
        <>
            <h2>Stat Block Overview</h2>
            <p>A monster has a stat block that contains the rules
                necessary to use it in the game. Stat blocks are divided
                into the following parts:</p>
            <p><strong>Name and General Details.</strong> The name of the monster
                is followed by its size, creature type (along
                with any descriptive tags), and alignment.</p>
            <p><strong>Combat Highlights.</strong> Armor Class, Hit Points, Speed,
                and Initiative are provided here.</p>
            <p><strong>Ability Scores.</strong> A monster’s ability scores, ability
                modifiers, and saving throws are listed here.</p>
            <p><strong>Other Details.</strong> The monster’s Senses, Languages,
                and CR entries appear here. Additional details appear
                in some monsters, such as skill proficiencies,
                Resistances, Immunities, and Gear. If a monster
                lacks those details, entries for them don’t appear.</p>
            <p><strong>Traits.</strong> Monster characteristics that are active at all
                times or during certain situations appear here.</p>
            <p><strong>Actions.</strong> The monster can take the actions here in
                addition to those in “Playing the Game.”</p>
            <p><strong>Bonus Actions.</strong> This section provides a monster’s
                Bonus Actions, if any.</p>
            <p><strong>Reactions and Legendary Actions.</strong> These sections
                provide Reactions and Legendary Actions, if any.</p>
            
            <h2>Parts of a Stat Block</h2>
            <p>The rules for a stat block are detailed in “Rules Glossary”
                and in this section.</p>
            <h3>Size</h3>
            <div className="compendium-divider"></div>
            <p>A monster is Tiny, Small, Medium, Large, Huge,
                or Gargantuan. If size options are presented, you
                choose the creature’s size from those options. See
                “Playing the Game” for information on size.</p>

            <h3>Creature Type</h3>
            <div className="compendium-divider"></div>
            <p>Each monster has a tag that identifies the type of
                creature it is. Certain spells, magic items, class features,
                and other effects in the game interact in special
                ways with creatures of a particular type.</p>
            <p>The game includes the following creature types,
                which have no rules of their own:</p>
            <p><strong>Aberrations </strong>are utterly alien beings, such as aboleths and cloakers.</p>
            <p><strong>Beasts </strong>are non-Humanoid natural creatures, like
                horses and wolves, as well as most giant animals.</p>
            <p><strong>Celestials</strong> are magical creatures, such as angels and
                pegasi, with ties to the Upper Planes.</p>
            <p><strong>Constructs</strong> are magically created creatures such as
                homunculi and shield guardians.</p>
            <p><strong>Dragons</strong> are scaly beings of ancient origin, such as
                red dragons and wyverns.</p>
            <p><strong>Elementals</strong> are beings from the Elemental Planes,
                such as efreet and water elementals.</p>
            <p><strong>Fey</strong> are creatures tied to the Feywild or the forces
                of nature, such as dryads and goblins.</p>
            <p><strong>Fiends</strong> are creatures tied to terrifying Lower
                Planes, such as balors and hell hounds.</p>
            <p><strong>Giants</strong> are towering beings with humanlike shapes,
                like fire giants and trolls.</p>
            <p><strong>Humanoids</strong> are people defined by their roles and
                professions, such as mages, pirates, and warriors.
                They include members of varied species.</p>
            <p><strong>Monstrosities</strong> are unnatural creatures with
                strange origins, such as mimics and owlbears.</p>
            <p><strong>Oozes</strong> are gelatinous creatures, including black
                puddings and gelatinous cubes.</p>
            <p><strong>Plants</strong> are sentient vegetation and fungal monsters,
                such as shambling mounds and treants.</p>
            <p><strong>Undead</strong> are spirits and the reanimated dead, such
                as ghosts, vampires, and zombies.</p>
            <h4>Descriptive Tags</h4>
            <p>A monster might have one or more tags in parentheses
                following its type. Such tags provide additional
                categorization and have no rules of their own, but
                certain game effects might refer to them.</p>
            
            <h3>Alignment</h3>
            <div className="compendium-divider"></div>
            <p>The alignment specified in a monster’s stat block is
                a default suggestion of how to roleplay the monster,
                inspired by its traditional role in the game or realworld
                folklore. Change a monster’s alignment to
                suit your storytelling needs. The Neutral alignment,
                in particular, is an invitation for you to consider
                whether an individual leans toward one of the other alignments.</p>
            <p>“Character Creation” describes the nine alignments
                and unaligned creatures.</p>
            
            <h3>Armor Class</h3>
            <div className="compendium-divider"></div>
            <p>A monster’s Armor Class (AC) includes its natural
                armor, Dexterity, gear, and other defenses. See
                “Playing the Game” for information on Armor Class.</p>

            <h3>Initiative</h3>
            <div className="compendium-divider"></div>
            <p>The Initiative entry specifies the monster’s Initiative
                modifier followed by the monster’s Initiative
                score in parentheses. Use the modifier when you
                roll to determine a monster’s Initiative. A monster’s
                Initiative modifier is typically equal to its Dexterity
                modifier, but some monsters have additional modifiers,
                such as Proficiency Bonus, applied to that number.</p>
            <p>If you don’t want to roll a monster’s Initiative, use
                the Initiative score as the monster’s Initiative in
                combat. Initiative is further detailed in “Playing the Game.”</p>

            <h3>Hit Points</h3>
            <div className="compendium-divider"></div>
            <p>A monster’s Hit Points are presented as a number
                followed by parentheses, where the monster’s Hit
                Point Dice are provided, along with any contribution
                from its Constitution. Either use the number for
                the monster’s Hit Points or roll the die expression in
                parentheses to determine the monster’s Hit Points
                randomly; don’t use both.</p>
            <p>A monster’s size typically determines the die used
                to calculate its Hit Points, as shown in the Hit Dice
                by Size table.</p>

            <h4>Hit Dice by Size</h4>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Monster Size</th>
                        <th scope="col">Hit Die</th>
                        <th scope="col">Average HP per Die</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Tiny</td>
                        <td>d4</td>
                        <td>2½</td>
                    </tr>
                    <tr>
                        <td>Small</td>
                        <td>d6</td>
                        <td>3½</td>
                    </tr>
                    <tr>
                        <td>Medium</td>
                        <td>d8</td>
                        <td>4½</td>
                    </tr>
                    <tr>
                        <td>Large</td>
                        <td>d10</td>
                        <td>5½</td>
                    </tr>
                    <tr>
                        <td>Huge</td>
                        <td>d12</td>
                        <td>6½</td>
                    </tr>
                    <tr>
                        <td>Gargantuan</td>
                        <td>d20</td>
                        <td>10½</td>
                    </tr>
                </tbody>
            </table>
            <p>A monster’s Constitution modifier is multiplied by
                the number of Hit Dice it possesses, and the result
                is added to its Hit Points. For example, if a monster
                has a Constitution of 12 (+1 modifier) and 2d8 Hit
                Dice, it has 2d8 + 2 Hit Points (average 11).</p>
            <p>For more on Hit Points, see “Playing the Game.”</p>

            <h3>Speed</h3>
            <div className="compendium-divider"></div>
            <p>The Speed entry specifies a monster’s Speed. Some
                monsters have one or more of the following speeds:
                Burrow, Climb, Fly, Swim. Rules for Speed and these
                specials speeds appear in “Rules Glossary.”</p>

            <h3>Ability Scores</h3>
            <div className="compendium-divider"></div>
            <p>Every monster has six ability scores along with
                corresponding ability score modifiers and saving
                throw modifiers. For more information on ability
                scores and saving throws, see “Playing the Game.”</p>

            <h3>Skills</h3>
            <div className="compendium-divider"></div>
            <p>The Skills entry specifies a monster’s skill proficiencies,
                if any. For example, a monster that is very
                perceptive and stealthy might have bonuses to Wisdom
                (Perception) and Dexterity (Stealth) checks. A
                skill bonus is the sum of a monster’s relevant ability
                modifier and its Proficiency Bonus. Other modifiers
                might apply.</p>
            
            <h3>Resistances and Vulnerabilities</h3>
            <div className="compendium-divider"></div>
            <p>These entries list a monster’s Resistances and Vulnerabilities,
                if any. See “Playing the Game” for more information.</p>

            <div className="compendium-content-emphasis">
                <h3>Running a Monster</h3>
                <p>To ensure a monster acts in accordance with its
                    Challenge Rating, follow these rules during combat:</p>
                <p><strong>Special Abilities.</strong> If the monster has a special ability
                    that deals a lot of damage but has a limited
                    number of uses, such as a recharging breath
                    weapon or a spell it can cast only once per day,
                    have it use that special ability as quickly and as
                    often as possible.</p>
                <p><strong>Multiattack.</strong> If the monster has Multiattack, have
                    it use Multiattack on any of its turns in which
                    it’s not using one of its more powerful abilities.</p>
                <p><strong>Bonus Actions, Reactions, Legendary Actions.</strong> If
                    the monster has Bonus Actions, Reactions, or
                    Legendary Actions in its stat block, make sure it
                    uses them as often as it can.</p>
            </div>

            <h3>Immunities</h3>
            <div className="compendium-divider"></div>
            <p>This entry lists the monster’s Immunities, if any. If
                the monster has damage and condition Immunities,
                the damage types are listed before the conditions.
                See “Playing the Game” for details.</p>

            <h3>Gear</h3>
            <div className="compendium-divider"></div>
            <p>Monsters have proficiency with their equipment. If
                a monster has equipment that can be given away or
                retrieved, the items are listed in the Gear entry. The
                monster’s stat block might include special flourishes
                that happen when the monster uses an item,
                and the stat block might ignore the rules in “Equipment”
                for that item. When used by someone else, a
                retrievable item uses its “Equipment” rules, ignoring
                any special flourishes in the stat block.</p>
            <p>The Gear entry doesn’t necessarily list all of a
                monster’s equipment. For example, a monster that
                wears clothes is assumed to be dressed appropriately,
                and those clothes aren’t in this entry.</p>
            <p>Equipment mentioned outside the Gear entry is
                considered to be supernatural or highly specialized,
                and it is unusable when the monster is defeated.</p>
            <h4>Ammunition and Ranged Attacks</h4>
            <p>A monster that requires ammunition to make
                ranged attacks carries the necessary ammunition.</p>
            <h4>Equipping a Monster with Other Items</h4>
            <p>You may equip monsters with additional gear however
                you like, using the items in “Equipment” for
                inspiration. You decide how much of a monster’s
                equipment is recoverable after the creature is slain
                and whether any of that equipment is still usable.</p>
            <p>Beware of giving a monster combat-oriented
                magic items, since those might alter the monster’s
                Challenge Rating. If you do give a monster a magic
                item, the monster can have Attunement with magic
                items as noted in “Equipment.” A monster with
                a class tag after its creature type is considered a
                member of that class for Attunement purposes.</p>

            <h3>Senses</h3>
            <div className="compendium-divider"></div>
            <p>The Senses entry specifies a monster’s Passive
                Perception score, as well as any special senses the
                monster possesses. Passive Perception and special
                senses are described in “Rules Glossary.”</p>

            <h3>Languages</h3>
            <div className="compendium-divider"></div>
            <p>This entry lists languages that the monster can use
                to communicate. Sometimes a monster can understand
                a language but can’t communicate with it,
                which is noted in its entry. “None” indicates that a
                creature doesn’t comprehend any language.</p>
            <h4>Telepathy</h4>
            <p>Telepathy is a magical ability that allows a creature
                to communicate mentally with another creature
                within a specified range. See “Rules Glossary” for
                more information.</p>

            <h3>Challenge Rating</h3>
            <div className="compendium-divider"></div>
            <p>Challenge Rating is defined in “Rules Glossary,”
                while guidance on using CR to plan potential combat
                encounters is in “Gameplay Toolbox.”</p>
            <h4>Experience Points</h4>
            <p>The number of Experience Points (XP) a monster
                is worth is based on its CR, as detailed in the Experience
                Points by Challenge Rating table. XP is
                awarded for defeating the monster in combat or
                otherwise neutralizing it.</p>
            <p>Unless a rule says otherwise, a monster summoned
                by a spell or another magical ability is worth
                the XP noted in its stat block.</p>
            <h4>Experience Points by Challenge Rating</h4>
            <div className="flex-row">
                <table>
                    <thead>
                        <tr>
                            <th scope="col">CR</th>
                            <th scope="col">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>0</td>
                            <td>0 or 10</td>
                        </tr>
                        <tr>
                            <td>1/8</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>1/4</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>1/2</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>200</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>450</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>700</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>1,100</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>1,800</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>2,300</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>2,900</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>3,900</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>5,000</td>
                        </tr>
                        <tr>
                            <td>10</td>
                            <td>5,900</td>
                        </tr>
                        <tr>
                            <td>11</td>
                            <td>7,200</td>
                        </tr>
                        <tr>
                            <td>12</td>
                            <td>8,400</td>
                        </tr>
                        <tr>
                            <td>13</td>
                            <td>10,000</td>
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">CR</th>
                            <th scope="col">XR</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>14</td>
                            <td>11,500</td>
                        </tr>
                        <tr>
                            <td>15</td>
                            <td>13,000</td>
                        </tr>
                        <tr>
                            <td>16</td>
                            <td>15,000</td>
                        </tr>
                        <tr>
                            <td>17</td>
                            <td>18,000</td>
                        </tr>
                        <tr>
                            <td>18</td>
                            <td>20,000</td>
                        </tr>
                        <tr>
                            <td>19</td>
                            <td>22,000</td>
                        </tr>
                        <tr>
                            <td>20</td>
                            <td>25,000</td>
                        </tr>
                        <tr>
                            <td>21</td>
                            <td>33,000</td>
                        </tr>
                        <tr>
                            <td>22</td>
                            <td>41,000</td>
                        </tr>
                        <tr>
                            <td>23</td>
                            <td>50,000</td>
                        </tr>
                        <tr>
                            <td>24</td>
                            <td>62,000</td>
                        </tr>
                        <tr>
                            <td>25</td>
                            <td>75,000</td>
                        </tr>
                        <tr>
                            <td>26</td>
                            <td>90,000</td>
                        </tr>
                        <tr>
                            <td>27</td>
                            <td>105,000</td>
                        </tr>
                        <tr>
                            <td>28</td>
                            <td>120,000</td>
                        </tr>
                        <tr>
                            <td>29</td>
                            <td>135,000</td>
                        </tr>
                        <tr>
                            <td>30</td>
                            <td>155,000</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <h4>Proficiency Bonus</h4>
            <p>A monster’s Proficiency Bonus (PB) is determined
                by its CR, as shown in the Proficiency Bonus by
                Challenge Rating table, and is reflected in saving
                throws, skills, and other statistics where the monster’s
                exceptional aptitude is a factor.</p>
            <h4>Proficiency Bonus by Challenge Rating</h4>
            <table>
                <thead>
                    <tr>
                        <th scope="col">CR</th>
                        <th scope="col">PB</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>0–4</td>
                        <td>+2</td>
                    </tr>
                    <tr>
                        <td>5–8</td>
                        <td>+3</td>
                    </tr>
                    <tr>
                        <td>9–12</td>
                        <td>+4</td>
                    </tr>
                    <tr>
                        <td>13–16</td>
                        <td>+5</td>
                    </tr>
                    <tr>
                        <td>17–20</td>
                        <td>+6</td>
                    </tr>
                    <tr>
                        <td>21–24</td>
                        <td>+7</td>
                    </tr>
                    <tr>
                        <td>25–28</td>
                        <td>+8</td>
                    </tr>
                    <tr>
                        <td>29–30</td>
                        <td>+9</td>
                    </tr>
                </tbody>
            </table>

            <h3>Traits</h3>
            <div className="compendium-divider"></div>
            <p>A monster’s traits, if any, are features that are active
                at all times or in certain situations.</p>
            
            <h3>Actions</h3>
            <div className="compendium-divider"></div>
            <p>A monster can take the actions in this section or
                take one of the actions available to all creatures, as
                described in “Playing the Game.”</p>
            <h4>Attack Notation</h4>
            <p>The entry for a monster’s attack identifies whether
                the attack is a melee or a ranged attack and then
                provides the attack roll’s bonus, its reach or range,
                and what happens on a hit. An attack is against one
                target unless its entry says otherwise. For details
                on different kinds of attacks, see “Playing the Game”
                and “Spells.”</p>
            <p><strong>Hit.</strong> Any damage dealt or other effects that occur
                as a result of an attack hitting a target are described
                after the “Hit:” notation.</p>
            <p><strong>Miss.</strong> If an attack has an effect that occurs on a
                miss, that information follows the “Miss:” notation.</p>
            <p><strong>Hit or Miss.</strong> If an attack has an effect that occurs
                regardless of whether it hits or misses its target,
                that information follows the “Hit or Miss:” notation.</p>
            <h4>Saving Throw Effect Notation</h4>
            <p>If an effect forces a saving throw, the effect identifies
                the kind of save required and then provides the
                save’s DC, a description of which creatures make
                the save, and an explanation of what happens on a
                failed or successful save.</p>
            <p>“Half damage only” on a successful save means
                the target takes half as much damage (round down)
                as targets that fail the save, while also ignoring all
                other parts of the effect.</p>
            <h4>Damage Notation</h4>
            <p>A stat block usually provides both a number and a
                die expression for each instance of damage. For example,
                an attack might deal 4 (1d4 + 2) damage on a
                hit. You decide whether to use the number or the die
                expression in parentheses; don’t use both.</p>
            <h4>Multiattack</h4>
            <p>Some creatures can make more than one attack
                when they take the Attack action. Such creatures
                have the Multiattack entry in the “Actions” section
                of their stat block. This entry details the attacks a
                creature can make, as well as any additional abilities
                it can use, as part of the Attack action.</p>
            <h4>Spellcasting</h4>
            <p>If a monster can cast any spells, its stat block lists
                the spells and provides the monster’s spellcasting
                ability, spell save DC (if any spells require a saving
                throw), and spell attack bonus (if any spells require
                an attack roll). Unless noted otherwise, a spell of
                level 1 or higher is always cast at its lowest possible
                level and can’t be cast at a higher level.</p>
            <p>A monster’s spell can have special rules or restrictions.
                For example, a green hag can cast the Invisibility
                spell, but the spell has a “self only” restriction,
                which means the spell affects only the hag.</p>
            <p><strong>Spell Components.</strong> The Spellcasting trait notes
                whether the monster’s spellcasting ignores the
                need for certain spell components. If any spell components
                are required, describe the monster’s use of
                Verbal, Somatic, or Material components to signal to
                characters that it is casting a spell. A monster that
                requires Material components has them.</p>
            <p><strong>Casting Times of 1+ Minutes.</strong> If a spell has a casting
                time of 1 minute or more yet is listed in a spellcasting
                action, the monster doesn’t cast the spell in
                just one action unless the action’s description states
                otherwise; the monster must take the Magic action
                on each of its turns and maintain Concentration to
                cast the spell, as described in “Rules Glossary.”</p>
            
            <h3>Bonus Action</h3>
            <div className="compendium-divider"></div>
            <p>If a monster has Bonus Action options, they are
                listed in this section. See “Playing the Game” for details
                on Bonus Actions.</p>

            <h3>Reactions</h3>
            <div className="compendium-divider"></div>
            <p>If the monster has Reaction options, those are listed
                in this section along with their triggers. See “Playing
                the Game” for details on Reactions.</p>

            <h3>Legendary Actions</h3>
            <div className="compendium-divider"></div>
            <p>If the monster has Legendary Action options, those
                are listed in this section. A Legendary Action is an
                action that a monster can take immediately after
                another creature’s turn. Only one of these actions
                can be taken at a time and only after another creature’s
                turn ends. The monster can’t take a Legendary
                Action if it has the Incapacitated condition or is
                otherwise unable to take actions.</p>
            <p>The monster has a limited number of Legendary
                Action uses, and that number is specified in the
                stat block. The monster expends one use whenever
                it takes a Legendary Action, and it regains all expended
                uses at the start of each of its turns.</p>

            <h3>Limited Usage</h3>
            <div className="compendium-divider"></div>
            <p>Some parts of a stat block have restrictions on the
                number of times they can be used. Here are the
                most common ways that usage is limited:</p>
            <p><strong>X/Day.</strong> This notation means the stat block part can
                be used a certain number of times (represented
                by X) and that a monster must finish a Long Rest
                to regain expended uses. For example, a Reaction
                that includes “1/Day” means the Reaction can be
                taken once and that the monster must finish a
                Long Rest to take it again.</p>
            <p><strong>Recharge X–Y.</strong> This notation means a monster
                can use the stat block part once. At the start of
                each of the monster’s turns, roll 1d6. If the roll
                is within the number range given in the notation
                (represented by X–Y), the monster regains the use
                of that part, which also recharges when the monster
                finishes a Short or Long Rest. For example,
                “Recharge 5–6” in an action means a monster can
                take the action once. Then, at the start of each of
                the monster’s turns, it regains the use of that action
                if it rolls a 5 or 6 on 1d6.</p>
            <p><strong>Recharge after a Short or Long Rest.</strong> This notation
                means the monster can use the stat block
                part once and must then finish a Short or Long
                Rest to use it again.</p>
        </>
    )
}