import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import styles from "./index.module.css";

import { ArrowsPointingOutIcon } from "@heroicons/react/24/solid";
import img from "/public/tokyo.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={styles.header}
        >
          <span>Shared</span>
          <span className={styles.byYou}> by you</span>
        </motion.h1>

        <motion.figure className={styles.imageContainer} layoutId="image">
          <Image
            alt="albumCover"
            className={styles.image}
            src={img}
            width={400}
            height={400}
            objectFit="cover"
          />
        </motion.figure>

        <div>
          <header>
            <motion.p
              className={styles.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Lost in Tokyo
            </motion.p>
          </header>
          <header>
            <motion.p
              className={styles.description}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.
            </motion.p>
          </header>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={styles.buttonContainer}
          >
            <Link href="/detailed" passHref>
              <div className={styles.expandButton}>
                <ArrowsPointingOutIcon height={30} width={30} />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
