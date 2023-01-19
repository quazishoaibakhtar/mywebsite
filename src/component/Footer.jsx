import React from 'react'
import '../styles/footer.scss'
const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Akhtar*</h1>
        <p>@all right reserved</p>
      </div>

      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.youtube.com/watch?v=xuB1Id2Wxak&list=PL9ooVrP1hQOGwtQOt8ZBlVjFlI-9Vr5hx" target={"blank"}>
            Youtube
          </a>
          <a href="https://www.linkedin.com/feed/" target={"blank"}>
            linkedin
          </a>
          <a href="https://github.com/quazishoaibakhtar/mywebsite" target={"blank"}>
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer