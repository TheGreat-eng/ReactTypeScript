// type TodoProps = {
//     todos: {
//         id: number;
//         title: string;
//         completed: boolean;
//     }[]
// }

interface IProps {
    todos: {
        id: number;
        title: string;
        completed: boolean;
    }[];
    onToggle?: (id: number) => void;
    onDelete?: (id: number) => void;
    owner?: string;
    age?: number;
    isDeveloper?: boolean;
}

const TodoData = (props: IProps) => {
    const { todos, onToggle, onDelete } = props;

    if (todos.length === 0) {
        return (
            <div style={{
                textAlign: "center",
                padding: "60px 20px",
                color: "#6c757d"
            }}>
                <div style={{ fontSize: "4rem", marginBottom: "20px" }}>🎉</div>
                <h3 style={{ margin: "0 0 10px 0", color: "#495057" }}>No tasks yet!</h3>
                <p style={{ margin: "0", fontSize: "1.1rem" }}>Add your first task above to get started.</p>
            </div>
        );
    }

    return (
        <div>
            {todos.map((item, index) => (
                <div
                    key={item.id}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        padding: "20px",
                        margin: "15px 0",
                        background: item.completed
                            ? "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
                            : "white",
                        borderRadius: "15px",
                        border: "2px solid",
                        borderColor: item.completed ? "#28a745" : "#e9ecef",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                        transition: "all 0.3s ease",
                        transform: "translateY(0)"
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-3px)";
                        e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 0, 0, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                    }}
                >
                    <div style={{
                        marginRight: "15px",
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "#6c757d",
                        minWidth: "30px"
                    }}>
                        {index + 1}
                    </div>

                    <div style={{ flex: "1" }}>
                        <h3 style={{
                            margin: "0",
                            fontSize: "1.2rem",
                            color: item.completed ? "#28a745" : "#495057",
                            textDecoration: item.completed ? "line-through" : "none",
                            transition: "all 0.3s ease"
                        }}>
                            {item.completed ? "✅" : "📝"} {item.title}
                        </h3>
                        <p style={{
                            margin: "5px 0 0 0",
                            fontSize: "0.9rem",
                            color: item.completed ? "#28a745" : "#6c757d",
                            fontWeight: "500"
                        }}>
                            {item.completed ? "🎉 Completed!" : "⏳ In Progress"}
                        </p>
                    </div>

                    <div style={{ display: "flex", gap: "10px" }}>
                        {onToggle && (
                            <button
                                onClick={() => onToggle(item.id)}
                                style={{
                                    padding: "8px 16px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "white",
                                    background: item.completed
                                        ? "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)"
                                        : "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                                    border: "none",
                                    borderRadius: "20px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease"
                                }}
                            >
                                {item.completed ? "↩️ Undo" : "✅ Done"}
                            </button>
                        )}

                        {onDelete && (
                            <button
                                onClick={() => onDelete(item.id)}
                                style={{
                                    padding: "8px 16px",
                                    fontSize: "0.9rem",
                                    fontWeight: "600",
                                    color: "white",
                                    background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
                                    border: "none",
                                    borderRadius: "20px",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease"
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.background = "linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.background = "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)";
                                }}
                            >
                                🗑️ Delete
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoData;