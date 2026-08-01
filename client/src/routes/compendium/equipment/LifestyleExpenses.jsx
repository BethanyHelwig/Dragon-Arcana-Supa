export default function LifestyleExpenses(){
    return(
        <div>
            <h2>Lifestyle Expenses</h2>
            <p>Lifestyle expenses summarize the cost of living in a
                fantasy world. They cover lodging, food, equipment
                maintenance, and other necessities.</p>
            <p>At the start of each week or month (GM’s choice),
                choose a lifestyle below—Wretched, Squalid, Poor,
                Modest, Comfortable, Wealthy, or Aristocratic—and
                pay the price to sustain that lifestyle.</p>
            <p>Lifestyles have no inherent consequences, but the
                GM might take them into account when determining
                risks or how others perceive your character.</p>

            <h3>Wretched (Free)</h3>
            <div className="compendium-divider"></div>
            <p>You survive via chance and charity. You’re often
                exposed to natural dangers as a result of sleeping outside.</p>
            
            <h3>Squalid (1 SP per Day)</h3>
            <div className="compendium-divider"></div>
            <p>You spend the bare minimum for your necessities.
                You might be exposed to unhealthy conditions and
                opportunistic criminals.</p>

            <h3>Poor (2 SP per Day)</h3>
            <div className="compendium-divider"></div>
            <p>You spend frugally for your necessities.</p>

            <h3>Modest (1 GP per Day)</h3>
            <div className="compendium-divider"></div>
            <p>You support yourself at an average level.</p>

            <h3>Comfortable (2 GP per Day)</h3>
            <div className="compendium-divider"></div>
            <p>You spend modestly for your necessities and enjoy a few luxuries.</p>

            <h3>Wealthy (4 GP per Day)</h3>
            <div className="compendium-divider"></div>
            <p>You’re accustomed to the finer things in life and
                might have servants.</p>

            <h3>Aristocratic (10 GP per Day)</h3>
            <div className="compendium-divider"></div>
            <p>You pay for the best and might have a staff that supports
                your lifestyle. Others notice your wealth and
                might encourage you to share it, either legally or otherwise.</p>
        </div>
    )
}