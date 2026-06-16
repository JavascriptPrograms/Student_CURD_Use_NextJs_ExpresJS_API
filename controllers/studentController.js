const db = require("../config/db");

exports.getStudent = async (req, res) => {
    try {
        // Default page = 1, limit = 5
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5;

        const offset = (page - 1) * limit;

        // Get students with pagination
        const [students] = await db.query(
            "SELECT * FROM students LIMIT ? OFFSET ?",
            [limit, offset]
        );

        // Total records
        const [totalRows] = await db.query(
            "SELECT COUNT(*) AS total FROM students"
        );

        const total = totalRows[0].total;

        res.status(200).json({
            success: true,
            page,
            limit,
            totalRecords: total,
            totalPages: Math.ceil(total / limit),
            data: students
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.addStudent = async (req, res) => {
    try {
        const { name, course, college } = req.body;

        const sql = "INSERT INTO students(name,course,college) values(?,?,?)";
        const [result] = await db.query(sql, [name, course, college]);
        return res.status(201).json({
            success: true,
            message: "Student Added Successfully",
            data: result
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

exports.deleteStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const [result] = await db.query("DELETE FROM students WHERE id= ?", [id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        return res.status(201).json({
            success: true,
            message: "Student deleted successfully"
        })
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.updateStudent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, course, college } = req.body;

        const [result] = await db.query("UPDATE students SET name=?, course=?, college=? WHERE id=?", [name, course, college, id]);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }
        return res.status(201).json({
            success: true,
            message: "Student Updated Successfully",
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
};

exports.getIdStudent = async (req, res) => {
    try {
        const { id } = req.params;

        const [rows] = await db.query("SELECT * FROM students WHERE id=?", [id]);

        if (rows.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            data: rows
        });

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        });
    }
}

