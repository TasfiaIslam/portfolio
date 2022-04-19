import React from 'react';
import BlockContent from '../block-content';
import * as styles from './style.module.css';

const ProjectContent = ({ content }: any): JSX.Element => {
  return <div className={styles.content}>{!!content && <BlockContent blocks={content} />}</div>;
};

export default ProjectContent;
