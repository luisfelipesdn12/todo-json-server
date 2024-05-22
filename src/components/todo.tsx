import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { API_URL } from "@/lib/utils";
import { TrashIcon } from "lucide-react";

export interface Todo {
    id: string;
    name: string;
    done: boolean;
}

export default function Todo({ data, fetchTodos }: { data: Todo, fetchTodos: () => void }) {
    return (
        <li className="flex gap-2 justify-between">
            <div className="flex gap-2 items-center">
                <Checkbox
                    checked={data.done}
                    onCheckedChange={(e) => {
                        const done = e.valueOf() as boolean;
                        fetch(`${API_URL}/${data.id}`, { method: "PUT", body: JSON.stringify({ ...data, done }) })
                            .then(fetchTodos);
                    }}
                />
                <p className="text-xl">
                    {data.name}
                </p>
            </div>
            <Button
                variant="destructive"
                onClick={(e) => {
                    fetch(`${API_URL}/${data.id}`, { method: "DELETE" })
                        .then(fetchTodos);
                }}
            >
                <TrashIcon />
            </Button>
        </li>
    );
}
