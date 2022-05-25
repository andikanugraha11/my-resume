import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="page-content">
    <header id="site_header" className="header mobile-menu-hide">
      <div className="header-content">
        <div className="header-photo">
          <img src="static/img/main_photo.jpg" alt="Andika Nugraha" />
        </div>
        <div className="header-titles">
          <h2>Andika Nugraha</h2>
          <h4>Software Engineer</h4>
        </div>
      </div>
      <ul className="main-menu">
        <li className="active">
          <a href="#home" className="nav-anim">
            <span className="menu-icon lnr lnr-home" />
            <span className="link-text">Home</span>
          </a>
        </li>
        <li>
          <a href="#about-me" className="nav-anim">
            <span className="menu-icon lnr lnr-user" />
            <span className="link-text">About Me</span>
          </a>
        </li>
        <li>
          <a href="#resume" className="nav-anim">
            <span className="menu-icon lnr lnr-graduation-hat" />
            <span className="link-text">Resume</span>
          </a>
        </li>
        <li>
          <a href="#portfolio" className="nav-anim">
            <span className="menu-icon lnr lnr-briefcase" />
            <span className="link-text">Portfolio</span>
          </a>
        </li>
        <li>
          <a href="#blog" className="nav-anim">
            <span className="menu-icon lnr lnr-book" />
            <span className="link-text">Blog</span>
          </a>
        </li>
        <li>
          <a href="#contact" className="nav-anim">
            <span className="menu-icon lnr lnr-envelope" />
            <span className="link-text">Contact</span>
          </a>
        </li>
      </ul>
      <div className="social-links">
        <ul>
          <li><a href="https://www.linkedin.com/in/andika-nugraha-256049102" target="_blank"><i className="fab fa-linkedin-in" /></a></li>
          <li><a href="https://github.com/andikanugraha11" target="_blank"><i className="fab fa-github" /></a></li>
          <li><a href="https://github.com/andikanugr" target="_blank"><i className="fab fa-github" /></a></li>
        </ul>
      </div>
      <div className="header-buttons">
        <a href="#" target="_blank" className="btn btn-primary">Download CV</a>
      </div>
      <div className="copyrights">© 2020 All rights reserved.</div>
    </header>
    {/* Mobile Navigation */}
    <div className="menu-toggle">
      <span />
      <span />
      <span />
    </div>
    {/* End Mobile Navigation */}
    {/* Arrows Nav */}
    <div className="lmpixels-arrows-nav">
      <div className="lmpixels-arrow-right"><i className="lnr lnr-chevron-right" /></div>
      <div className="lmpixels-arrow-left"><i className="lnr lnr-chevron-left" /></div>
    </div>
    {/* End Arrows Nav */}
    <div className="content-area">
      <div className="animated-sections">
        {/* Home Subpage */}
        <section data-id="home" className="animated-section start-page">
          <div className="section-content vcentered">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12">
                <div className="title-block">
                  <h2>Andika Nugraha</h2>
                  <div className="owl-carousel text-rotation">                                    
                    <div className="item">
                      <div className="sp-subtitle">Software Engineer</div>
                    </div>
                    <div className="item">
                      <div className="sp-subtitle">Frontend-developer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Home Subpage */}
        {/* About Me Subpage */}
        <section data-id="about-me" className="animated-section">
          <div className="section-content">
            <div className="page-title">
              <h2>About <span>Me</span></h2>
            </div>
            {/* Personal Information */}
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <p>Proin volutpat mauris ac pellentesque pharetra. Suspendisse congue elit vel odio suscipit, sit amet tempor nisl imperdiet. Quisque ex justo, faucibus ut mi in, condimentum finibus dolor. Aliquam vitae hendrerit dolor, eget imperdiet mauris. Maecenas et ante id ipsum condimentum dictum et vel massa. Ut in imperdiet dolor, vel consectetur dui.</p>
              </div>
              <div className="col-xs-12 col-sm-5">
                <div className="info-list">
                  <ul>
                    <li>
                      <span className="title">Age</span>
                      <span className="value">32</span>
                    </li>
                    <li>
                      <span className="title">Residence</span>
                      <span className="value">USA</span>
                    </li>
                    <li>
                      <span className="title">Address</span>
                      <span className="value">88 Some Street, Some Town</span>
                    </li>
                    <li>
                      <span className="title">e-mail</span>
                      <span className="value">email@example.com</span>
                    </li>
                    <li>
                      <span className="title">Phone</span>
                      <span className="value">+0123 123 456 789</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End of Personal Information */}
            <div className="white-space-50" />
            {/* Services */}
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="block-title">
                  <h3>What <span>I Do</span></h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-6">
                <div className="col-inner">
                  <div className="info-list-w-icon">
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <i className="lnr lnr-store" />
                      </div>
                      <div className="ci-text">
                        <h4>Ecommerce</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                      </div>
                    </div>
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <i className="lnr lnr-laptop-phone" />
                      </div><div className="ci-text">
                        <h4>Web Design</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-sm-6">
                <div className="col-inner">
                  <div className="info-list-w-icon">
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <i className="lnr lnr-pencil" />
                      </div>
                      <div className="ci-text">
                        <h4>Copywriting</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                      </div>
                    </div>
                    <div className="info-block-w-icon">
                      <div className="ci-icon">
                        <i className="lnr lnr-flag" />
                      </div><div className="ci-text">
                        <h4>Management</h4>
                        <p>Pellentesque pellentesque, ipsum sit amet auctor accumsan, odio tortor bibendum massa, sit amet ultricies ex lectus scelerisque nibh. Ut non sodales.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Services */}
            <div className="white-space-30" />
            {/* Testimonials */}
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="block-title">
                  <h3>Testimonials</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="testimonials owl-carousel">
                  {/* Testimonial 1 */}
                  <div className="testimonial">
                    <div className="img">
                      <img src="static/img/testimonials/testimonial-1.jpg" alt="Andika Nugraha" />
                    </div>
                    <div className="text">
                      <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                    </div>
                    <div className="author-info">
                      <h4 className="author">Julia Hickman</h4>
                      <h5 className="company">Omni Source</h5>
                      <div className="icon">
                        <i className="fas fa-quote-right" />
                      </div>
                    </div>
                  </div>
                  {/* End of Testimonial 1 */}
                  {/* Testimonial 2 */}
                  <div className="testimonial">
                    <div className="img">
                      <img src="static/img/testimonials/testimonial-2.jpg" alt="Andika Nugraha" />
                    </div>
                    <div className="text">
                      <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                    </div>
                    <div className="author-info">
                      <h4 className="author">Robert Watkins</h4>
                      <h5 className="company">Endicott Shoes</h5>
                      <div className="icon">
                        <i className="fas fa-quote-right" />
                      </div>
                    </div>
                  </div>
                  {/* End of Testimonial 2 */}
                  {/* Testimonial 3 */}
                  <div className="testimonial">
                    <div className="img">
                      <img src="static/img/testimonials/testimonial-3.jpg" alt="Andika Nugraha" />
                    </div>
                    <div className="text">
                      <p>Vivamus at molestie dui, eu ornare orci. Curabitur vel egestas dolor. Nulla condimentum nunc sit amet urna tempus finibus. Duis mollis leo id ligula pellentesque, at vehicula dui ultrices.</p>
                    </div>
                    <div className="author-info">
                      <h4 className="author">Kristin Carroll</h4>
                      <h5 className="company">Helping Hand</h5>
                      <div className="icon">
                        <i className="fas fa-quote-right" />
                      </div>
                    </div>
                  </div>
                  {/* End of Testimonial 3 */}
                </div>
              </div>
            </div>
            {/* End of Testimonials */}
            <div className="white-space-50" />
            {/* Clients */}
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="block-title">
                  <h3>Cilents</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="clients owl-carousel">
                  <div className="client-block">
                    <a href="#" target="_blank" title="Logo">
                      <img src="static/img/clients/client-1.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="client-block">
                    <a href="#" target="_blank" title="Logo">
                      <img src="static/img/clients/client-2.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="client-block">
                    <a href="#" target="_blank" title="Logo">
                      <img src="static/img/clients/client-3.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="client-block">
                    <a href="#" target="_blank" title="Logo">
                      <img src="static/img/clients/client-4.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="client-block">
                    <a href="#" target="_blank" title="Logo">
                      <img src="static/img/clients/client-5.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="client-block">
                    <a href="#" target="_blank" title="Logo">
                      <img src="static/img/clients/client-6.png" alt="Logo" />
                    </a>
                  </div>
                  <div className="client-block">
                    <a href="#" target="_blank" title="Logo">
                      <img src="static/img/clients/client-7.png" alt="Logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Clients */}
            <div className="white-space-50" />
            {/* Pricing */}
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="block-title">
                  <h3>Pricing</h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className=" col-xs-12 col-sm-12 ">
                <div className="fw-pricing clearfix row">
                  <div className="fw-package-wrap col-md-6 ">
                    <div className="fw-package">
                      <div className="fw-heading-row">
                        <span>Silver</span>
                      </div>
                      <div className="fw-pricing-row">
                        <span>$64</span>
                        <small>per month</small>
                      </div>
                      <div className="fw-button-row">
                        <a href="#" target="_self" className="btn btn-secondary">Free Trial</a>
                      </div>
                      <div className="fw-default-row">Lorem ipsum dolor</div>
                      <div className="fw-default-row">Pellentesque scelerisque</div>
                      <div className="fw-default-row">Morbi eu sagittis</div>
                    </div>
                  </div>
                  <div className="fw-package-wrap col-md-6 highlight-col ">
                    <div className="fw-package">
                      <div className="fw-heading-row">
                        <span>Gold</span>
                      </div>
                      <div className="fw-pricing-row">
                        <span>$128</span>
                        <small>per month</small>
                      </div>
                      <div className="fw-button-row">
                        <a href="#" target="_self" className="btn btn-primary">Free Trial</a>
                      </div>
                      <div className="fw-default-row">Lorem ipsum dolor</div>
                      <div className="fw-default-row">Pellentesque scelerisque</div>
                      <div className="fw-default-row">Morbi eu sagittis</div>
                      <div className="fw-default-row">Donec non diam</div>
                      <div className="fw-default-row" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Pricing */}
            <div className="white-space-50" />
            {/* Fun Facts */}
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="block-title">
                  <h3>Fun <span>Facts</span></h3>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-4">
                <div className="fun-fact gray-default">
                  <i className="lnr lnr-heart" />
                  <h4>Happy Clients</h4>
                  <span className="fun-fact-block-value">578</span>
                  <span className="fun-fact-block-text" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-4">
                <div className="fun-fact gray-default">
                  <i className="lnr lnr-clock" />
                  <h4>Working Hours</h4>
                  <span className="fun-fact-block-value">4,780</span>
                  <span className="fun-fact-block-text" />
                </div>
              </div>
              <div className="col-xs-12 col-sm-4 ">
                <div className="fun-fact gray-default">
                  <i className="lnr lnr-star" />
                  <h4>Awards Won</h4>
                  <span className="fun-fact-block-value">15</span>
                  <span className="fun-fact-block-text" />
                </div>
              </div>
            </div>
            {/* End of Fun Facts */}
          </div>
        </section>
        {/* End of About Me Subpage */}
        {/* Resume Subpage */}
        <section data-id="resume" className="animated-section">
          <div className="section-content">
            <div className="page-title">
              <h2>Resume</h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <div className="block-title">
                  <h3>Education</h3>
                </div>
                <div className="timeline timeline-second-style clearfix">
                  <div className="timeline-item clearfix">
                    <div className="left-part">
                      <h5 className="item-period">2008</h5>
                      <span className="item-company">University of Studies</span>
                    </div>
                    <div className="divider" />
                    <div className="right-part">
                      <h4 className="item-title">Frontend Development</h4>
                      <p>Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.</p>
                    </div>
                  </div>
                  <div className="timeline-item clearfix">
                    <div className="left-part">
                      <h5 className="item-period">2007</h5>
                      <span className="item-company">University of Studies</span>
                    </div>
                    <div className="divider" />
                    <div className="right-part">
                      <h4 className="item-title">Graphic Design</h4>
                      <p>Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.</p>
                    </div>
                  </div>
                </div>
                <div className="white-space-50" />
                <div className="block-title">
                  <h3>Experience</h3>
                </div>
                <div className="timeline timeline-second-style clearfix">
                  <div className="timeline-item clearfix">
                    <div className="left-part">
                      <h5 className="item-period">2016 - Current</h5>
                      <span className="item-company">Google</span>
                    </div>
                    <div className="divider" />
                    <div className="right-part">
                      <h4 className="item-title">Lead Ui/Ux Designer</h4>
                      <p>Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.</p>
                    </div>
                  </div>
                  <div className="timeline-item clearfix">
                    <div className="left-part">
                      <h5 className="item-period">2013 - 2016</h5>
                      <span className="item-company">Adobe</span>
                    </div>
                    <div className="divider" />
                    <div className="right-part">
                      <h4 className="item-title">Senior Ui/Ux Designer</h4>
                      <p>Maecenas tempus faucibus rutrum. Duis eu aliquam urna. Proin vitae nulla tristique, ornare felis id, congue libero. Nam volutpat euismod quam.</p>
                    </div>
                  </div>
                  <div className="timeline-item clearfix">
                    <div className="left-part">
                      <h5 className="item-period">2011 - 2013</h5>
                      <span className="item-company">Google</span>
                    </div>
                    <div className="divider" />
                    <div className="right-part">
                      <h4 className="item-title">Junior Ui/Ux Designer</h4>
                      <p>Duis mollis nunc quis quam viverra venenatis. Nulla nulla arcu, congue vitae nunc ac, sodales ultricies diam. Nullam justo leo, tincidunt sit amet.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Skills & Certificates */}
              <div className="col-xs-12 col-sm-5">
                {/* Design Skills */}
                <div className="block-title">
                  <h3>Design <span>Skills</span></h3>
                </div>
                <div className="skills-info skills-second-style">
                  {/* Skill 1 */}
                  <div className="skill clearfix">
                    <h4>Web Design</h4>
                    <div className="skill-value">95%</div>
                  </div>
                  <div className="skill-container skill-1">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 1 */}
                  {/* Skill 2 */}
                  <div className="skill clearfix">
                    <h4>Print Design</h4>
                    <div className="skill-value">65%</div>
                  </div>
                  <div className="skill-container skill-2">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 2 */}
                  {/* Skill 3 */}
                  <div className="skill clearfix">
                    <h4>Logo Design</h4>
                    <div className="skill-value">80%</div>
                  </div>
                  <div className="skill-container skill-3">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 3 */}
                  {/* Skill 4 */}
                  <div className="skill clearfix">
                    <h4>Graphic Design</h4>
                    <div className="skill-value">90%</div>
                  </div>
                  <div className="skill-container skill-4">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 4 */}
                </div>
                {/* End of Design Skills */}
                <div className="white-space-10" />
                {/* Coding Skills */}
                <div className="block-title">
                  <h3>Coding <span>Skills</span></h3>
                </div>
                <div className="skills-info skills-second-style">
                  {/* Skill 5 */}
                  <div className="skill clearfix">
                    <h4>JavaScript</h4>
                    <div className="skill-value">95%</div>
                  </div>
                  <div className="skill-container skill-5">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 5 */}
                  {/* Skill 6 */}
                  <div className="skill clearfix">
                    <h4>PHP</h4>
                    <div className="skill-value">85%</div>
                  </div>
                  <div className="skill-container skill-6">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 6 */}
                  {/* Skill 7 */}
                  <div className="skill clearfix">
                    <h4>HTML/CSS</h4>
                    <div className="skill-value">100%</div>
                  </div>
                  <div className="skill-container skill-7">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 7 */}
                  {/* Skill 8 */}
                  <div className="skill clearfix">
                    <h4>Smarty/Twig</h4>
                    <div className="skill-value">75%</div>
                  </div>
                  <div className="skill-container skill-8">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 8 */}
                  {/* Skill 9 */}
                  <div className="skill clearfix">
                    <h4>Perl</h4>
                    <div className="skill-value">90%</div>
                  </div>
                  <div className="skill-container skill-9">
                    <div className="skill-percentage" />
                  </div>
                  {/* End of Skill 9 */}
                </div>
                {/* End of Coding Skills */}
                <div className="white-space-10" />
                {/* Knowledges */}
                <div className="block-title">
                  <h3>Knowledges</h3>
                </div>
                <ul className="knowledges">
                  <li>Marketing</li>
                  <li>Print</li>
                  <li>Digital Design</li>
                  <li>Social Media</li>
                  <li>Time Management</li>
                  <li>Communication</li>
                  <li>Problem-Solving</li>
                  <li>Social Networking</li>
                  <li>Flexibility</li>
                </ul>
                {/* End of Knowledges */}
              </div>
              {/* End of Skills & Certificates */}
            </div>
            <div className="white-space-50" />
            {/* Certificates */}
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="block-title">
                  <h3>Certificates</h3>
                </div>
              </div>
            </div>
            <div className="row">
              {/* Certificate 1 */}
              <div className="col-xs-12 col-sm-6">
                <div className="certificate-item clearfix">
                  <div className="certi-logo">
                    <img src="static/img/clients/client-1.png" alt="logo" />
                  </div>
                  <div className="certi-content">
                    <div className="certi-title">
                      <h4>Psyhology of Intertnation Design</h4>
                    </div>
                    <div className="certi-id">
                      <span>Membership ID: XXXX</span>
                    </div>
                    <div className="certi-date">
                      <span>19 April 2018</span>
                    </div>
                    <div className="certi-company">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Certificate 1 */}
              {/* Certificate 2 */}
              <div className="col-xs-12 col-sm-6">
                <div className="certificate-item clearfix">
                  <div className="certi-logo">
                    <img src="static/img/clients/client-1.png" alt="logo" />
                  </div>
                  <div className="certi-content">
                    <div className="certi-title">
                      <h4>Psyhology of Intertnation Design</h4>
                    </div>
                    <div className="certi-id">
                      <span>Membership ID: XXXX</span>
                    </div>
                    <div className="certi-date">
                      <span>19 April 2018</span>
                    </div>
                    <div className="certi-company">
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              {/* End of Certificate 2 */}
            </div>
            {/* End of Certificates */}
          </div>
        </section>
        {/* End of Resume Subpage */}
        {/* Portfolio Subpage */}
        <section data-id="portfolio" className="animated-section">
          <div className="section-content">
            <div className="page-title">
              <h2>Portfolio</h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                {/* Portfolio Content */}
                <div className="portfolio-content">
                  <ul className="portfolio-filters">
                    <li className="active">
                      <a className="filter btn btn-sm btn-link" data-group="category_all">All</a>
                    </li>
                    <li>
                      <a className="filter btn btn-sm btn-link" data-group="category_detailed">Detailed</a>
                    </li>
                    <li>
                      <a className="filter btn btn-sm btn-link" data-group="category_mockups">Mockups</a>
                    </li>
                    <li>
                      <a className="filter btn btn-sm btn-link" data-group="category_soundcloud">SoundCloud</a>
                    </li>
                    <li>
                      <a className="filter btn btn-sm btn-link" data-group="category_vimeo-videos">Vimeo Videos</a>
                    </li>
                    <li>
                      <a className="filter btn btn-sm btn-link" data-group="category_youtube-videos">YouTube Videos</a>
                    </li>
                  </ul>
                  {/* Portfolio Grid */}
                  <div className="portfolio-grid three-columns">
                    <figure className="item lbaudio" data-groups="[&quot;category_all&quot;, &quot;category_soundcloud&quot;]">
                      <div className="portfolio-item-img">
                        <img src="static/img/portfolio/1.jpg" alt="SoundCloud Audio" title />
                        <a href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221650664&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true" className="lightbox mfp-iframe" title="SoundCloud Audio" />
                      </div>
                      <i className="fa fa-volume-up" />
                      <h4 className="name">SoundCloud Audio</h4>
                      <span className="category">SoundCloud</span>
                    </figure>
                    <figure className="item standard" data-groups="[&quot;category_all&quot;, &quot;category_detailed&quot;]">
                      <div className="portfolio-item-img">
                        <img src="static/img/portfolio/2.jpg" alt="Media Project 2" title />
                        <a href="portfolio-1.html" className="ajax-page-load" />
                      </div>
                      <i className="far fa-file-alt" />
                      <h4 className="name">Detailed Project 2</h4>
                      <span className="category">Detailed</span>
                    </figure>
                    <figure className="item lbvideo" data-groups="[&quot;category_all&quot;, &quot;category_vimeo-videos&quot;]">
                      <div className="portfolio-item-img">
                        <img src="static/img/portfolio/3.jpg" alt="Vimeo Video 1" title />
                        <a href="https://player.vimeo.com/video/158284739" className="lightbox mfp-iframe" title="Vimeo Video 1" />
                      </div>
                      <i className="fas fa-video" />
                      <h4 className="name">Vimeo Video 1</h4>
                      <span className="category">Vimeo Videos</span>
                    </figure>
                    <figure className="item standard" data-groups="[&quot;category_all&quot;, &quot;category_detailed&quot;]">
                      <div className="portfolio-item-img">
                        <img src="static/img/portfolio/4.jpg" alt="Media Project 1" title />
                        <a href="portfolio-1.html" className="ajax-page-load" />
                      </div>
                      <i className="far fa-file-alt" />
                      <h4 className="name">Detailed Project 1</h4>
                      <span className="category">Detailed</span>
                    </figure>
                    <figure className="item lbimage" data-groups="[&quot;category_all&quot;, &quot;category_mockups&quot;]">
                      <div className="portfolio-item-img">
                        <img src="static/img/portfolio/5.jpg" alt="Mockup Design 1" title />
                        <a className="lightbox" title="Mockup Design 1" href="static/img/portfolio/full/5.jpg" />
                      </div>
                      <i className="far fa-image" />
                      <h4 className="name">Mockup Design 1</h4>
                      <span className="category">Mockups</span>
                    </figure>
                    <figure className="item lbvideo" data-groups="[&quot;category_all&quot;, &quot;category_youtube-videos&quot;]">
                      <div className="portfolio-item-img">
                        <img src="static/img/portfolio/6.jpg" alt="YouTube Video 1" title />
                        <a href="https://www.youtube.com/embed/bg0gv2YpIok" className="lightbox mfp-iframe" title="YouTube Video 1" />
                      </div>
                      <i className="fas fa-video" />
                      <h4 className="name">YouTube Video 1</h4>
                      <span className="category">YouTube Videos</span>
                    </figure>
                  </div>
                </div>
                {/* End of Portfolio Content */}
              </div>
            </div>
          </div>
        </section>
        {/* End of Portfolio Subpage */}
        {/* Blog Subpage */}
        <section data-id="blog" className="animated-section">
          <div className="section-content">
            <div className="page-title">
              <h2>Blog</h2>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12">
                <div className="blog-masonry two-columns clearfix">
                  {/* Blog Post 1 */}
                  <div className="item post-1">
                    <div className="blog-card">
                      <div className="media-block">
                        <div className="category">
                          <a href="#" title="View all posts in Design">Design</a>
                        </div>
                        <a href="blog-post-1.html">
                          <img src="static/img/blog/blog_post_1.jpg" className="size-blog-masonry-image-two-c" alt="Why I Switched to Sketch For UI Design" title />
                          <div className="mask" />
                        </a>
                      </div>
                      <div className="post-info">
                        <div className="post-date">05 Mar 2020</div>
                        <a href="blog-post-1.html">
                          <h4 className="blog-item-title">Why I Switched to Sketch For UI Design</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End of Blog Post 1 */}
                  {/* Blog Post 2 */}
                  <div className="item post-2">
                    <div className="blog-card">
                      <div className="media-block">
                        <div className="category">
                          <a href="#" title="View all posts in UI">UI</a>
                        </div>
                        <a href="blog-post-1.html">
                          <img src="static/img/blog/blog_post_2.jpg" className="size-blog-masonry-image-two-c" alt="Best Practices for Animated Progress Indicators" title />
                          <div className="mask" />
                        </a>
                      </div>
                      <div className="post-info">
                        <div className="post-date">23 Feb 2020</div>
                        <a href="blog-post-1.html">
                          <h4 className="blog-item-title">Best Practices for Animated Progress Indicators</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End of Blog Post 2 */}
                  {/* Blog Post 3 */}
                  <div className="item post-1">
                    <div className="blog-card">
                      <div className="media-block">
                        <div className="category">
                          <a href="#" title="View all posts in Design">Design</a>
                        </div>
                        <a href="blog-post-1.html">
                          <img src="static/img/blog/blog_post_3.jpg" className="size-blog-masonry-image-two-c" alt="Designing the Perfect Feature Comparison Table" title />
                          <div className="mask" />
                        </a>
                      </div>
                      <div className="post-info">
                        <div className="post-date">06 Feb 2020</div>
                        <a href="blog-post-1.html">
                          <h4 className="blog-item-title">Designing the Perfect Feature Comparison Table</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End of Blog Post 3 */}
                  {/* Blog Post 4 */}
                  <div className="item post-2">
                    <div className="blog-card">
                      <div className="media-block">
                        <div className="category">
                          <a href="#" title="View all posts in E-Commerce">UI</a>
                        </div>
                        <a href="blog-post-1.html">
                          <img src="static/img/blog/blog_post_4.jpg" className="size-blog-masonry-image-two-c" alt="An Overview of E-Commerce Platforms" title />
                          <div className="mask" />
                        </a>
                      </div>
                      <div className="post-info">
                        <div className="post-date">07 Jan 2020</div>
                        <a href="blog-post-1.html">
                          <h4 className="blog-item-title">An Overview of E-Commerce Platforms</h4>
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End of Blog Post 4 */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Blog Subpage */}
        {/* Contact Subpage */}
        <section data-id="contact" className="animated-section">
          <div className="section-content">
            <div className="page-title">
              <h2>Contact</h2>
            </div>
            <div className="row">
              {/* Contact Info */}
              <div className="col-xs-12 col-sm-4">
                <div className="lm-info-block gray-default">
                  <i className="lnr lnr-map-marker" />
                  <h4>San Francisco</h4>
                  <span className="lm-info-block-value" />
                  <span className="lm-info-block-text" />
                </div>
                <div className="lm-info-block gray-default">
                  <i className="lnr lnr-phone-handset" />
                  <h4>415-832-2000</h4>
                  <span className="lm-info-block-value" />
                  <span className="lm-info-block-text" />
                </div>
                <div className="lm-info-block gray-default">
                  <i className="lnr lnr-envelope" />
                  <h4>alex@example.com</h4>
                  <span className="lm-info-block-value" />
                  <span className="lm-info-block-text" />
                </div>
                <div className="lm-info-block gray-default">
                  <i className="lnr lnr-checkmark-circle" />
                  <h4>Freelance Available</h4>
                  <span className="lm-info-block-value" />
                  <span className="lm-info-block-text" />
                </div>
              </div>
              {/* End of Contact Info */}
              {/* Contact Form */}
              <div className="col-xs-12 col-sm-8">
                <div id="map" className="map" />
                <div className="block-title">
                  <h3>How Can I <span>Help You?</span></h3>
                </div>
                <form id="contact_form" className="contact-form" action="contact_form/contact_form.php" method="post">
                  <div className="messages" />
                  <div className="controls two-columns">
                    <div className="fields clearfix">
                      <div className="left-column">
                        <div className="form-group form-group-with-icon">
                          <input id="form_name" type="text" name="name" className="form-control" placeholder required="required" data-error="Name is required." />
                          <label>Full Name</label>
                          <div className="form-control-border" />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group form-group-with-icon">
                          <input id="form_email" type="email" name="email" className="form-control" placeholder required="required" data-error="Valid email is required." />
                          <label>Email Address</label>
                          <div className="form-control-border" />
                          <div className="help-block with-errors" />
                        </div>
                        <div className="form-group form-group-with-icon">
                          <input id="form_subject" type="text" name="subject" className="form-control" placeholder required="required" data-error="Subject is required." />
                          <label>Subject</label>
                          <div className="form-control-border" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                      <div className="right-column">
                        <div className="form-group form-group-with-icon">
                          <textarea id="form_message" name="message" className="form-control" placeholder rows={7} required="required" data-error="Please, leave me a message." defaultValue={""} />
                          <label>Message</label>
                          <div className="form-control-border" />
                          <div className="help-block with-errors" />
                        </div>
                      </div>
                    </div>
                    <div className="g-recaptcha" data-sitekey="6LdqmCAUAAAAAMMNEZvn6g4W5e0or2sZmAVpxVqI" />
                    <input type="submit" className="button btn-send" defaultValue="Send message" />
                  </div>
                </form>
              </div>
              {/* End of Contact Form */}
            </div>
          </div>
        </section>
        {/* End of Contact Subpage */}
      </div>
    </div>
  </div>
  )
}
