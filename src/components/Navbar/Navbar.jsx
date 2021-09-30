import './Navbar.scss'

export default function About() {
    return (
        <>
            <div className="nav">
                <div className="logo">
                    <p>
                        <a href="https://www.artstation.com/anamatico">@man <span className="grey"> on artstation</span></a>
                    </p>
                </div>
                <input type="checkbox" id="click" />
                <label htmlFor="click">
                    <div className="burger">
                        <i class="fas fa-ellipsis-v menu-bar"></i>
                    </div>
                </label>
                <ul className="nav-link-container">
                    <li className="nav-link">
                        <a href="#abt">About</a>
                    </li>
                    <li className="nav-link">
                    <a href="#proj">Projects</a>
                    </li>
                </ul>
            </div>
        </>
    )
}
