export function ExperienceBar () {
    return(
        <header className="experience-bar">
            <span>0h</span>
            <div>
                <div style={{width: '50%'}} />
                    <span className="current-experience" style={{left: '50%'}}>
                        3h
                    </span>
            </div>
            <span>9h</span>
        </header>
    );
}