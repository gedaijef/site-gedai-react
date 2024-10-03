import styles from "./Skill.module.css";

const Skill = ({skill, icon}) => {
  return (
    <li className={styles.skill}>
      {skill}<span className={styles.icon}>{icon}</span>
    </li>
  );
};

export default Skill;
