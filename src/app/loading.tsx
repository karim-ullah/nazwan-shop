import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button variant="outline" disabled size="sm">
        <Spinner data-icon="inline-start" />
        Please wait
      </Button>
    </div>
  );
};

export default Loading;
