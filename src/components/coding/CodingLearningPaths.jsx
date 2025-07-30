import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const learningPathsData = [
  {
    title: "Web-Entwicklung",
    badges: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    description:
      "Beginne mit den Grundlagen von HTML, CSS und JavaScript, bevor du zu Frameworks wie React übergehst. Lerne dann Backend-Entwicklung mit Node.js und Datenbanken.",
    links: [
      { label: "MDN Web Docs", url: "https://developer.mozilla.org/de/docs/Learn" },
      { label: "React Tutorial", url: "https://reactjs.org/tutorial/tutorial.html" },
      { label: "Node.js Guides", url: "https://nodejs.org/en/docs/guides/" },
      { label: "W3Schools", url: "https://www.w3schools.com/" },
      { label: "freeCodeCamp", url: "https://www.freecodecamp.org/learn/" },
    ],
  },
  {
    title: "Data Science",
    badges: ["Python", "Pandas", "NumPy", "Matplotlib", "Machine Learning"],
    description:
      "Starte mit Python-Grundlagen, dann lerne Datenanalyse mit Pandas und NumPy. Visualisiere Daten mit Matplotlib und tauche in Machine Learning mit scikit-learn ein.",
    links: [
      { label: "Python Getting Started", url: "https://www.python.org/about/gettingstarted/" },
      { label: "Pandas Docs", url: "https://pandas.pydata.org/docs/getting_started/index.html" },
      { label: "NumPy Quickstart", url: "https://numpy.org/doc/stable/user/quickstart.html" },
      { label: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html" },
      { label: "scikit-learn Tutorial", url: "https://scikit-learn.org/stable/tutorial/index.html" },
    ],
  },
  {
    title: "Mobile Entwicklung",
    badges: ["JavaScript", "React Native", "Flutter", "Swift", "Kotlin"],
    description:
      "Beginne mit JavaScript und React für Cross-Platform-Entwicklung mit React Native, oder lerne Flutter für eine Alternative. Für native Apps konzentriere dich auf Swift (iOS) oder Kotlin (Android).",
    links: [
      { label: "React Native Docs", url: "https://reactnative.dev/docs/getting-started" },
      { label: "Flutter Docs", url: "https://flutter.dev/docs" },
      { label: "Swift (Apple)", url: "https://developer.apple.com/swift/" },
      { label: "Kotlin (Android)", url: "https://developer.android.com/kotlin" },
      { label: "JavaScript MDN", url: "https://developer.mozilla.org/de/docs/Web/JavaScript" },
    ],
  },
  {
    title: "DevOps & Cloud",
    badges: ["Linux", "Docker", "Kubernetes", "AWS", "CI/CD"],
    description:
      "Starte mit Linux-Grundlagen und Bash-Scripting. Lerne dann Container mit Docker und Orchestrierung mit Kubernetes. Vertiefe dein Wissen mit Cloud-Plattformen wie AWS und CI/CD-Pipelines.",
    links: [
      { label: "Linux Journey", url: "https://linuxjourney.com/" },
      { label: "Docker Docs", url: "https://docs.docker.com/get-started/" },
      { label: "Kubernetes Tutorials", url: "https://kubernetes.io/docs/tutorials/" },
      { label: "AWS Getting Started", url: "https://aws.amazon.com/getting-started/" },
      { label: "CI/CD Basics (RedHat)", url: "https://www.redhat.com/en/topics/devops/what-is-ci-cd" },
    ],
  },
];

const CodingLearningPaths = () => {
  return (
    <section className="py-12">
      <div className="rounded-lg border border-border/50 bg-card/50 p-6">
        <h2 className="text-2xl font-bold mb-6">Empfohlene Lernpfade</h2>
        <div className="space-y-6">
          {learningPathsData.map((path) => (
            <div
              key={path.title}
              className="rounded-md border border-border/50 bg-background/50 p-4"
            >
              <h3 className="text-lg font-semibold mb-2">{path.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {path.badges.map((badge) => (
                  <Badge key={badge}>{badge}</Badge>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {path.links.map((link) => (
                  <Button
                    key={link.url}
                    asChild
                    variant="outline"
                    size="sm"
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label}
                      </a>
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingLearningPaths;
