"use client";

import * as React from "react";
import { useState } from "react";
import Link from 'next/link';
import styles from "./joinus.module.scss";
import { Link as LinkIcon } from "lucide-react";

export default function JoinUsPage() {
  const [gender, setGender] = useState("");

  return (
    <div className={styles.joinUsContainer}>
      <h1 className={styles.title}>Join Us</h1>
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="firstName">*First Name</label>
          <input type="text" id="firstName" placeholder="First Name" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="lastName">*Last Name</label>
          <input type="text" id="lastName" placeholder="Last Name" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">*Email</label>
          <input type="email" id="email" placeholder="user@nagarro.com" required />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="mobile">Mobile Number</label>
          <input type="tel" id="mobile" placeholder="Mobile Number" />
        </div>

        <div className={styles.inputGroup}>
          <label>Gender</label>
          <div className={styles.genderOptions}>
            <label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>

        <div className={styles.inputGroup}>
          <button type="submit" className={styles.submitBtn}>
            Submit
          </button>
        </div>

        <p className={styles.signInText}>
          Already have an account?{" "}
          <Link href="/auth/login" className={styles.signInLink}>Sign in instead</Link>
        </p>
      </form>
    </div>
  );
}
