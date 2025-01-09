import React from "react";
import { Link } from "next-view-transitions";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import styles from "./WorkDetail.module.css";
import { worksData } from "../components/Works/Works";
import { generateWorkMetadata } from "./metadata";
import HoverMeButton from "@/app/components/elements/HovermeButton/HoverMeButton";
import type { Route } from 'next';

export async function generateStaticParams() {
  return worksData.map((workData) => ({
    id: workData.id.toString(),
  }));
}

export const generateMetadata = generateWorkMetadata;

const WorkDetail = ({ params }: { params: { id: string } }) => {
  const workId = parseInt(params.id);
  const work = worksData.find((w) => w.id === workId);
  const otherWorks = worksData.filter((w) => w.id !== workId);

  if (!work) {
    return <div className={styles.notFound}>Work not found</div>;
  }

  const skillsList = work.skillsList.split(", ") || [];
  const roleList = work.role?.split(", ") || [];
  const usernameList = work.username?.split(", ") || [];
  const passwordList = work.password?.split(", ") || [];

  return (
    <>
      <div className={styles["work-detail-container"]}>
        <section className={styles["work"]}>
          <div className={styles["work__container"]}>
            <div className={styles["work__article-container"]}>
              <article className={styles["work__article"]}>
                <div className={styles["work__mv"]}>
                  <figure className={styles["work__mv-figure"]}>
                    <Image
                      src={work.image}
                      alt={work.workTitle}
                      style={{ maxWidth: "100%", height: "auto" }}
                      width={1920}
                      height={1080}
                      className={`${styles["work__mv-img"]} ${work.viewTransitionImage}`}
                    />
                  </figure>
                </div>
                <div className={styles["work__content"]}>
                  <h1
                    className={`font-russo ${styles["work__title"]} ${work.viewTransitionName}`}
                  >
                    {work.workTitle}
                  </h1>
                  <div className={styles["work__info"]}>
                    <div
                      className={`font-russo ${styles["work__url-container"]}`}
                    >
                      <span className={styles["work__url-label"]}>URL：</span>
                      <a
                        href={work.siteUrl}
                        className={`${styles["work__url"]} ${styles["hover-un"]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {work.siteUrl}
                      </a>
                    </div>
                    <div className={styles["work__skills"]}>
                      <span className={styles["work__skills-label"]}>
                        使用技術：
                      </span>
                      <ul className={styles["work__skills-list"]}>
                        {skillsList.map((skill, index) => (
                          <li
                            key={index}
                            className={`font-russo ${styles["work__skills-item"]}`}
                          >
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles["work__role"]}>
                      <span className={styles["work__role-label"]}>担当：</span>
                      <ul className={styles["work__role-list"]}>
                        {roleList.map((role, index) => (
                          <li
                            key={index}
                            className={`font-russo ${styles["work__role-item"]}`}
                          >
                            {role}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {work.username && (
                      <div className={`font-russo ${styles["work__name"]}`}>
                        <span className={styles["work__name-label"]}>
                          username：
                        </span>
                        <ul className={styles["work__name-list"]}>
                          {usernameList.map((username, index) => (
                            <li
                              key={index}
                              className={styles["work__name-item"]}
                            >
                              {username}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {work.password && (
                      <div className={`font-russo ${styles["work__password"]}`}>
                        <span className={styles["work__password-label"]}>
                          password：
                        </span>
                        <ul className={styles["work__password-list"]}>
                          {passwordList.map((password, index) => (
                            <li
                              key={index}
                              className={styles["work__password-item"]}
                            >
                              {password}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  <div className={styles["work__summary"]}>
                    <h2 className={styles["work__summary-title"]}>概要</h2>
                    {work.description && (
                      <ReactMarkdown className={styles["work__description"]}>
                        {work.description}
                      </ReactMarkdown>
                    )}
                    <div className={styles["work__detail-container"]}>
                      {work.detail01 && (
                        <div className={styles["work__detail-content"]}>
                          {work.detail01 && (
                            <>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <ReactMarkdown className={styles["work__detail"]}>
                                {work.detail01}
                              </ReactMarkdown>
                            </>
                          )}
                          {work.detail02 && (
                            <>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <ReactMarkdown className={styles["work__detail"]}>
                                {work.detail02}
                              </ReactMarkdown>
                            </>
                          )}
                          {work.detail03 && (
                            <>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <ReactMarkdown className={styles["work__detail"]}>
                                {work.detail03}
                              </ReactMarkdown>
                            </>
                          )}
                          {work.detail04 && (
                            <>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <ReactMarkdown className={styles["work__detail"]}>
                                {work.detail04}
                              </ReactMarkdown>
                            </>
                          )}
                          {work.detail05 && (
                            <>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <ReactMarkdown className={styles["work__detail"]}>
                                {work.detail05}
                              </ReactMarkdown>
                            </>
                          )}
                          {work.detail06 && (
                            <>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <ReactMarkdown className={styles["work__detail"]}>
                                {work.detail06}
                              </ReactMarkdown>
                            </>
                          )}
                          {work.detail07 && (
                            <>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <ReactMarkdown className={styles["work__detail"]}>
                                {work.detail07}
                              </ReactMarkdown>
                            </>
                          )}
                        </div>
                      )}
                      {work.specification01 && (
                        <div className={styles["work__specification-content"]}>
                          {work.specification01 && (
                            <div className={styles["work__specification"]}>
                              <ReactMarkdown
                                className={styles["work__specification-title"]}
                                components={{
                                  p: ({children}) => <h3>{children}</h3>
                                }}
                              >
                                {work.specification01}
                              </ReactMarkdown>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <p className={styles["work__specification-detail"]}>
                                {work.specification01Detail01}
                              </p>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <p className={styles["work__specification-detail"]}>
                                {work.specification01Detail02}
                              </p>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <p className={styles["work__specification-detail"]}>
                                {work.specification01Detail03}
                              </p>
                              <div className={styles["work__detail-list-marker"]}></div>
                              <p className={styles["work__specification-detail"]}>
                                {work.specification01Detail04}
                              </p>
                            </div>
                          )}
                          {work.specification02 && (
                            <>
                              <div className={styles["work__specification"]}>
                                <ReactMarkdown
                                  className={styles["work__specification-title"]}
                                  components={{
                                    p: ({children}) => <h3>{children}</h3>
                                  }}
                                >
                                  {work.specification02}
                                </ReactMarkdown>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification02Detail01}
                                </p>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification02Detail02}
                                </p>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification02Detail03}
                                </p>
                              </div>
                            </>
                          )}
                          {work.specification03 && (
                            <>
                              <div className={styles["work__specification"]}>
                                <ReactMarkdown
                                  className={styles["work__specification-title"]}
                                  components={{
                                    p: ({children}) => <h3>{children}</h3>
                                  }}
                                >
                                  {work.specification03}
                                </ReactMarkdown>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification03Detail01}
                                </p>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification03Detail02}
                                </p>
                              </div>
                            </>
                          )}
                          {work.specification04 && (
                            <>
                              <div className={styles["work__specification"]}>
                                <ReactMarkdown
                                  className={styles["work__specification-title"]}
                                  components={{
                                    p: ({children}) => <h3>{children}</h3>
                                  }}
                                >
                                  {work.specification04}
                                </ReactMarkdown>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification04Detail01}
                                </p>
                              </div>
                            </>
                          )}
                          {work.specification05 && (
                            <>
                              <div className={styles["work__specification"]}>
                                <ReactMarkdown
                                  className={styles["work__specification-title"]}
                                  components={{
                                    p: ({children}) => <h3>{children}</h3>
                                  }}
                                >
                                  {work.specification05}
                                </ReactMarkdown>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification05Detail01}
                                </p>
                              </div>
                            </>
                          )}
                          {work.specification06 && (
                            <>
                              <div className={styles["work__specification"]}>
                                <ReactMarkdown
                                  className={styles["work__specification-title"]}
                                  components={{
                                    p: ({children}) => <h3>{children}</h3>
                                  }}
                                >
                                  {work.specification06}
                                </ReactMarkdown>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification06Detail01}
                                </p>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification06Detail02}
                                </p>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification06Detail03}
                                </p>
                                <div className={styles["work__detail-list-marker"]}></div>
                                <p className={styles["work__specification-detail"]}>
                                  {work.specification06Detail04}
                                </p>
                              </div>
                            </>
                          )}
                        </div>
                      )}
                    </div>
                    {work.basicAuthentication && (
                      <ReactMarkdown
                        className={styles["work__basic-authentication"]}
                      >
                        {work.basicAuthentication}
                      </ReactMarkdown>
                    )}
                  </div>
                  <div className={styles["work__return-link-container"]}>
                    <HoverMeButton href={"/works" as Route} />
                  </div>
                </div>
                {/* /.work__content */}
              </article>
              {/* /.work_article */}
            </div>
            {/* /.work__article-container */}
            <div className={styles["work__sidebar-container"]}>
              <aside className={styles["work__sidebar"]}>
                <h2 className={`font-russo ${styles["work__sidebar-title"]}`}>
                  Other Works
                </h2>
                <ul className={styles["work__sidebar-list"]}>
                  {otherWorks.map((otherWork) => (
                    <li
                      key={otherWork.id}
                      className={styles["work__sidebar-item"]}
                    >
                      <Link
                        href={`/works/${otherWork.id}` as Route}
                        className={styles["work__sidebar-link"]}
                        prefetch
                      >
                        <figure className={styles["work__sidebar-figure"]}>
                          <Image
                            src={otherWork.image}
                            alt={otherWork.workTitle}
                            width={800}
                            height={450}
                            className={`${styles["work__sidebar-img"]} ${otherWork.viewTransitionImage}`}
                          />
                        </figure>
                        <h3
                          className={`font-russo ${styles["work__sidebar-item-title"]} ${otherWork.viewTransitionName}`}
                        >
                          {otherWork.workTitle}
                        </h3>
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>
            </div>
          </div>
          {/* /.work__container */}
        </section>
      </div>
    </>
  );
};

export default WorkDetail;
