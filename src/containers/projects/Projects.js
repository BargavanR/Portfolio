import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import StyleContext from "../../contexts/StyleContext";
import Loading from "../../containers/loading/Loading";

const GithubRepoCard = lazy(() =>
  import("../../components/githubRepoCard/GithubRepoCard")
);

export default function Projects() {
  const [repo, setRepo] = useState(null);
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = async () => {
      try {
        const result = await fetch("/profile.json");
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`);
        }
        const response = await result.json();
        setRepo(response.data.user.pinnedItems.edges);
      } catch (error) {
        console.error(
          `${error} (Projects section could not be displayed)`
        );
        setRepo("Error");
      }
    };

    getRepoData();
  }, []); // ✅ CI safe

  if (typeof repo === "string" || !repo) {
    return null;
  }

  return (
    <Suspense fallback={<Loading />}>
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>

        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
              return null;
            }
            return (
              <GithubRepoCard
                repo={v}
                key={v.node.id}
                isDark={isDark}
              />
            );
          })}
        </div>

        <Button
          text="More Projects"
          className="project-button"
          href="https://github.com/BargavanR"
          newTab={true}
        />
      </div>
    </Suspense>
  );
}
