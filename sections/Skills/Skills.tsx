import { Tag, Title } from "@/components";
import { SkillProps } from "./Skills.props";
import styles from "./Skills.module.css";

export const Skills = ({ tags }: SkillProps): JSX.Element => {
  return (
    <section className={styles.section}>
      <Title tag="h2">Получаемые навыки</Title>
      {tags.map((tag) => (
        <Tag key={tag} color="accent">
          {tag}
        </Tag>
      ))}
    </section>
  );
};
