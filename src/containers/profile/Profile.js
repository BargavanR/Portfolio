import React, { useState, useEffect, lazy, Suspense } from "react";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);

const renderLoader = () => <Loading />;

export default function Profile() {
  const [prof, setProf] = useState(null);
  const [showGithubProfile, setShowGithubProfile] = useState(true);

  useEffect(() => {
    const getProfileData = async () => {
      try {
        const result = await fetch("/profile.json");
        if (!result.ok) {
          throw new Error(`HTTP error! status: ${result.status}`);
        }
        const response = await result.json();
        setProf(response.data.user);
      } catch (error) {
        console.error(
          `${error} (GitHub profile could not be displayed. Falling back to Contact section)`
        );
        setShowGithubProfile(false);
      }
    };

    getProfileData();
  }, []); // ✅ EMPTY dependency array (CI safe)

  if (
    showGithubProfile &&
    prof &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  }

  return <Contact />;
}
