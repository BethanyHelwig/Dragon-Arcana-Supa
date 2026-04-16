export default function CurseAndMagicalContagions(){
    return (
        <div className="compendium-content">
            <h2>Curses and Magical Contagions</h2>
            <p>A curse is a magical burden that lasts for a specified
                time or until it is ended by some means. A magical
                contagion is an adverse effect of magical origin that
                is contagious by definition.</p>
            <p>The following sections discuss curses and magical
                contagions in detail.</p>

            <h3>Curses</h3>
            <div className="compendium-divider"></div>
            <p>A curse typically takes one of the forms detailed below.</p>
            <h4>Bestow Curse</h4>
            <p>The simplest curses are created by the Bestow Curse
                spell. The effects of such curses are limited and can
                be ended by the Remove Curse spell.</p>
            <p>Bestow Curse provides useful benchmarks for
                gauging the potency of other curses. A curse that
                lasts for 1 minute equates to a level 3 spell, while
                one that lasts until dispelled equates to a level 9 spell.</p>
            <h4>Cursed Creatures</h4>
            <p>Some monsters are associated with curses, whether
                as part of their origins or due to their ability to
                spread curses—werewolves being a prime example.</p>
            <p>You decide how a spell like Remove Curse affects
                a creature with accursed origins. For example, you
                might decide that a mummy was created through a
                curse and it can be destroyed permanently only by
                casting Remove Curse on its corpse.</p>
            <h4>Cursed Magic Items</h4>
            <p>Cursed magic items are created deliberately or
                originate as the result of supernatural events. Such
                items are detailed in “Magic Items.”</p>
            <h4>Narrative Curses</h4>
            <p>A curse might manifest during an adventure when
                a creature’s violation of a taboo warrants supernatural
                punishment, such as breaking a vow, defiling a
                tomb, or murdering an innocent. Such a curse can
                have any effects you design, or it might be a customized
                version of another type of curse discussed in
                this section.</p>
            <p>A creature affected by such a curse should know
                why they’re being punished and be able to learn
                how to end their curse, likely by symbolically
                righting the wrong they committed. How a spell
                like Remove Curse affects a curse that’s part of your
                adventure is up to you—the spell might merely suppress
                the effects of the curse for a time. Regardless,
                narrative curses should feel like rare, potent magic
                rooted in the lore of your campaign.</p>
            <h4>Environmental Curses</h4>
            <p>Some locations are so suffused with evil that anyone
                who lingers there is burdened with a curse.
                Demonic Possession is one example of an environmental curse.</p>
            <p><strong>Demonic Possession.</strong> Demonic Possession arises
                from the chaos and evil of the Abyss and commonly
                besets creatures that interact with demonic objects
                or linger in desecrated locations, where demonic
                spirits await victims.</p>
            <p>A creature that becomes the target of Demonic
                Possession must succeed on a DC 15 Charisma saving
                throw or be possessed by a bodiless demonic
                entity. Whenever the possessed creature rolls a 1
                on a D20 Test, the demonic entity takes control of
                the creature and determines the creature’s behavior
                thereafter. At the end of each of the possessed
                creature’s later turns, the creature makes a DC 15
                Charisma saving throw, regaining control of itself
                on a success.</p>
            <p>After finishing a Long Rest, a creature with Demonic
                Possession makes a DC 15 Charisma saving
                throw. On a successful save, the effect ends on the
                creature. A Dispel Evil and Good spell or any magic
                that removes a curse also ends the effect on it.</p>

            <h3>Magical Contagions</h3>
            <div className="compendium-divider"></div>
            <p>Alchemists, potion brewers, and areas of wild magic
                are credited with creating the first magical contagions.
                An outbreak of such a contagion can form
                the basis of an adventure as characters search for a
                cure and try to stop the contagion’s spread.</p>
            <h4>Rest and Recuperation</h4>
            <p>If a creature infected with a magical contagion
                spends 3 days recuperating—engaging in no
                activities that would interrupt a Long Rest—the
                creature makes a DC 15 Constitution saving throw
                at the end of the recuperation period. On a successful
                save, the creature has Advantage on saving
                throws to fight off the magical contagion for the
                next 24 hours.</p>
            <h4>Example Contagions</h4>
            <p>The following examples show how magical contagions
                can work. Feel free to alter the saving throw
                DCs, effects, and other characteristics of these contagions
                to suit your campaign.</p>
            <h4>Cackle Fever</h4>
            <p>Cheaply made potions and elixirs are sometimes
                tainted by Cackle Fever, which affects Humanoids
                only (gnomes are strangely immune). A creature
                suffers the following effects 1d4 days after infection:</p>
            <p><strong>Fever.</strong> The creature gains 1 Exhaustion level, which
                lasts until the contagion ends on the creature.</p>
            <p><strong>Uncontrollable Laughter.</strong> While the creature has
                the Exhaustion condition, the creature makes
                a DC 13 Constitution saving throw each time it
                takes damage other than Psychic damage. On a
                failed save, the creature takes 5 (1d10) Psychic
                damage and has the Incapacitated condition as
                it laughs uncontrollably. At the end of each of its
                turns, the creature repeats the save, ending the
                effect on itself on a success. After 1 minute, it succeeds
                automatically.</p>
            <p><strong>Fighting the Contagion.</strong> At the end of each Long
                Rest, an infected creature makes a DC 13 Constitution
                saving throw. After the creature succeeds on
                three of these saves, the contagion ends on it, and
                the creature is immune to Cackle Fever for 1 year.</p>
            <p><strong>Spreading the Contagion.</strong> Any Humanoid (other
                than a gnome) that starts its turn within a 10-foot
                Emanation originating from a creature infected
                with Cackle Fever must succeed on a DC 10 Constitution
                saving throw or also become infected with
                the contagion. On a successful save, the Humanoid
                can’t catch the contagion from that particular infected
                creature for the next 24 hours.</p>
            
            <h4>Sewer Plague</h4>
            <p>Fouled potions and alchemical waste can give rise
                to Sewer Plague, which incubates in sewers and
                refuse heaps and is sometimes transmitted by
                creatures that dwell in such areas, including otyughs
                and rats. Any Humanoid that is wounded by a
                creature that carries the contagion or that comes
                into contact with contaminated filth or offal must
                succeed on a DC 11 Constitution saving throw or become
                infected with Sewer Plague. A creature suffers
                the following effects 1d4 days after infection:</p>
            <p><strong>Fatigue.</strong> The creature gains 1 Exhaustion level.</p>
            <p><strong>Weakness.</strong> While the creature has any Exhaustion
                levels, it regains only half the normal number of
                Hit Points from spending Hit Point Dice.</p>
            <p><strong>Restlessness.</strong> While the creature has any Exhaustion
                levels, finishing a Long Rest neither restores
                lost Hit Points nor reduces the creature’s Exhaustion level.</p>
            <p><strong>Fighting the Contagion.</strong> Daily at dawn, an infected
                creature makes a DC 11 Constitution saving
                throw. On a failed save, the creature gains 1 Exhaustion
                level as its fatigue worsens. On a successful
                save, the creature’s Exhaustion level decreases
                by 1. If the creature’s Exhaustion level is reduced to
                0, the contagion ends on the creature.</p>

            <h4>Sight Rot</h4>
            <p>Any Beast or Humanoid that drinks water tainted
                by Sight Rot must succeed on a DC 15 Constitution
                saving throw or have the Blinded condition until the
                contagion ends.</p>
            <p><strong>Fighting the Contagion.</strong> Magic such as a Heal or
                Lesser Restoration spell ends the contagion immediately.
                A character who is proficient with an Herbalism
                Kit can use it to create one dose of nonmagical
                ointment, which takes 1 hour. When applied to the
                eyes of a creature suffering from Sight Rot, the ointment
                suppresses the contagion on that creature for
                24 hours. If the contagion is suppressed in this way
                for a total of 72 hours (requiring three doses and
                applications of the ointment), the contagion ends on
                the creature.</p>
            <p><strong>Spreading the Contagion.</strong> Any Humanoid that
                makes skin contact with a creature infected with
                Sight Rot must succeed on a DC 15 Constitution
                saving throw or also become infected with the contagion.
                On a successful save, the Humanoid can’t
                catch the contagion from that particular infected
                creature for the next 24 hours.</p>
        </div>
    )
}