import {Card, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Project} from "@/components/types";

interface ProjectPreviewCardProps {
  project: Project;
}

export default function ProjectPreviewCard({project}: ProjectPreviewCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {project.name}
        </CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
    </Card>
  )
}