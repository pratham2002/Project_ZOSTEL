import React from "react";
import styles from "../css/LongStay.module.css";
export default function LongStay() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.navbar}>
          <a href="/">
            <img
              width="150px"
              src="https://s3.ap-south-1.amazonaws.com/zo-static/website/img/zostel-logo.png"
              alt="Zostel Logo"
            />
          </a>
          <div>
            <ul className={styles.navList}>
              <li>Destinations</li>
              <li>Hostels ⮟</li>
              <li>Homes ⮟</li>
              <li>Packages ⮟</li>
              <li>Franchise</li>
              <li>Join us ⮟</li>
              <li>Blog</li>
              <a href="/" target="_blank">
                <img
                  src="https://static.cdn.zo.xyz/media/zo-orange.svg"
                  alt="zoWorld Logo"
                />
                Zo World
              </a>
            </ul>
          </div>
        </div>
      </header>
      <section>
        <section>
          <div className={styles.head2}>
            <h1 className={styles.moveIn}>
              <span className={styles.orange}>#MoveIn</span> with Zostel
            </h1>
            <span className={styles.live}>Live where your heart is</span>
          </div>
          <div className={styles.backgroundImage}></div>
        </section>
        <section>
          <div
            style={{ margin: 0, height: "120px", backgroundColor: "gray" }}
          ></div>
        </section>
        <section>
          <h2>Features</h2>
          <div className={styles.featuresList}>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/unwind-with-a-view.484b7bd5.jpg)",
              }}
            >
              <div>
                <span>Unwind with a View</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/fulfilling-meals.f1e64564.jpg)",
              }}
            >
              <div>
                <span>Fulfilling Meals</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/work-uninterrupted.83d9188d.jpg)",
              }}
            >
              <div>
                <span>Work Uninterrupted</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/explore-destinations.d29352d3.jpg)",
              }}
            >
              <div>
                <span>Explore Destinations</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/work-friendly.b4efb195.jpg)",
              }}
            >
              <div>
                <span>Work Friendly Spaces</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/leave-responsibilities.278af7fb.jpg)",
              }}
            >
              <div>
                <span>Leave Responsibilities</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/ample-me-time.2db99362.jpg)",
              }}
            >
              <div>
                <span>Ample Me Time</span>
              </div>
            </div>
            <div
              style={{
                backgroundImage:
                  "url(https://book.zostel.com/static/media/periodic-sanitisation.79e93b6c.jpg)",
              }}
            >
              <div>
                <span>Periodic Sanitisation</span>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h2>FAQs</h2>
          </div>
        </section>
      </section>
    </>
  );
}
