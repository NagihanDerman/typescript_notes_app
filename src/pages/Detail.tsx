import { Link, useOutletContext } from "react-router-dom";
import { Note } from "../types";
import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

type Props = {
  deleteNote: (id: string) => void;
};

const Detail = ({ deleteNote }: Props) => {
  const note = useOutletContext<Note>();

  return (
    <div className="container py-5 mx-auto">
      <Row>
        <Col>
          <h1>{note.title}</h1>

          <Stack direction="horizontal" gap={3} className="flex-wrap">
            {note.tags.map((tag) => (
              <Badge className="badge bg-warning text-black">{tag.label}</Badge>
            ))}
          </Stack>
        </Col>

        <Col>
          <Stack direction="horizontal" gap={2}>
            <Link to="/">
              <Button variant="secondary">Back</Button>
            </Link>

            <Link to="edit">
              <Button variant="warning">Edit</Button>
            </Link>

            <Button onClick={() => deleteNote(note.id)} variant="danger">
              Delete
            </Button>
          </Stack>
        </Col>
      </Row>

      {/* markdown içeriğini ekrana bas */}
      <ReactMarkdown className="my-5">{note.markdown}</ReactMarkdown>
    </div>
  );
};

export default Detail;
