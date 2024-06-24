import {
    CardBody,
    CardFooter,
    CardHeader,
} from "@/components/RemoteComponents";
import { cn } from "@/utils";
import { Button, Typography } from "@material-tailwind/react";

const NoImageCardSkeleton = ({ className }) => {
    return (
        <div className={cn("mt-6  animate-pulse", className)}>
            <CardHeader
                shadow={false}
                floated={false}
            >
                <Typography
                    as="div"
                    variant="h1"
                    className="mb-4 h-3 w-56 rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="h1"
                    className="mb-4 h-3 w-56 rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="h1"
                    className="mb-4 h-3 w-56 rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
            </CardHeader>
            <CardBody>
                <Typography
                    as="div"
                    variant="h1"
                    className="mb-4 h-3 w-56 rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
                <Typography
                    as="div"
                    variant="paragraph"
                    className="mb-2 h-2 w-full rounded-full bg-gray-300"
                >
                    &nbsp;
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Button
                    disabled
                    tabIndex={-1}
                    className="h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
                >
                    &nbsp;
                </Button>
            </CardFooter>
        </div>
    );
};

export default NoImageCardSkeleton;