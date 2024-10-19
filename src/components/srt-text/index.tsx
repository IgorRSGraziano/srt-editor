import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";

type Props = {};

function SrtText({}: Props) {
	return (
		<Card className="w-full">
			<CardHeader>
				<CardTitle>SRT Text</CardTitle>
			</CardHeader>
			<CardContent>
				<Textarea className="w-full" placeholder="Enter your text here" />
			</CardContent>
		</Card>
	);
}

export default SrtText;
