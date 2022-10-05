import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import img from "/public/tokyo.png";
import { XMarkIcon, ChatBubbleLeftIcon } from "@heroicons/react/24/solid";
import styles from "./detailed.module.css";

export default function Features() {
  return (
    <div className={styles.container}>
      <motion.figure className={styles.content} layoutId="image">
        <Image
          alt={"albumCover"}
          className={styles.img}
          src={img}
          objectFit="cover"
        />
        <div className={styles.infoContainer}>
          <Link href="/" passHref>
            <div className={styles.closeButton}>
              <XMarkIcon />
            </div>
          </Link>
          <div>
            <div className={styles.title}>Lost in Tokyo</div>
            <div className={styles.albumInfoContainer}>
              <div className={styles.artist}>By Jonathan Vik</div>
              <div className={styles.commentsContainer}>
                8
                <ChatBubbleLeftIcon height={25} className={styles.icon} />
              </div>
            </div>
          </div>
        </div>
      </motion.figure>
    </div>
  );
}
