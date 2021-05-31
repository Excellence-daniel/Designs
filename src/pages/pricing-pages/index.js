import React from 'react'
import './style.scss'

export const Pricing = () => {
  return (
    <div className="pricing-page-one">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12">
            <p className="logo-print">
              <span>s</span>hop <span>u</span>s
            </p>
          </div>
          <div className="col-md-6 col-12">
            <ul>
              <li>about</li>
              <li>products</li>
              <li>shops</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="center">
            <h2 className="topic">
              Flexible <span className="black">Plans</span>
            </h2>
            <h4 className="sub-topic">
              Choose a plan that works best for you and your team
            </h4>
          </div>
        </div>

        <div className="row plans">
          <div className="plan">
            <div className="header">
              <p className="starter">
                <i class="bi bi-dice-1"></i>
              </p>
              <p>
                <h3>Tod Plan</h3>
                <h5>1 Month / 3k Euros</h5>
              </p>
            </div>
            <div className="body">
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Free Messaging</span>
              </p>
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Free Calls</span>
              </p>
              <p>
                <i class="bi bi-x-circle-fill"></i>
                <span> Internet Access </span>
              </p>
              <p>
                <i class="bi bi-x-circle-fill"></i>
                <span> Cloud Storage</span>
              </p>
              <p>
                <button className="btn btn-starter">
                  Choose Plan <i class="bi bi-arrow-right-short"></i>
                </button>
              </p>
            </div>
          </div>
          <div className="plan">
            <div className="header">
              <p className="big-boy">
                <i class="bi bi-dice-2"></i>
              </p>
              <p>
                <h3>Teen Plan</h3>
                <h5>1 Month / 6.5k Euros</h5>
              </p>
            </div>
            <div className="body">
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Free Messaging</span>
              </p>
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Free Calls</span>
              </p>
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Internet Access </span>
              </p>
              <p>
                <i class="bi bi-x-circle-fill"></i>
                <span> Cloud Storage</span>
              </p>
              <p>
                <button className="btn btn-teen">
                  Choose Plan <i class="bi bi-arrow-right-short"></i>
                </button>
              </p>
            </div>
          </div>
          <div className="plan">
            <div className="header">
              <p className="adult">
                <i class="bi bi-dice-3"></i>
              </p>
              <p>
                <h3>Adult Plan</h3>
                <h5>1 Month / 10k Euros</h5>
              </p>
            </div>
            <div className="body">
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Free Messaging</span>
              </p>
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Free Calls</span>
              </p>
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Internet Access </span>
              </p>
              <p>
                <i class="bi bi-check-circle-fill"></i>
                <span> Cloud Storage</span>
              </p>
              <p>
                <button className="btn btn-adult">
                  Choose Plan <i class="bi bi-arrow-right-short"></i>
                </button>
              </p>
            </div>
          </div>
        </div>

        <div className="row counter">
          <p>Page One</p>
        </div>
      </div>
    </div>
  )
}
