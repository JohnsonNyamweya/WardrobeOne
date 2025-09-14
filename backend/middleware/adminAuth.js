import jwt from 'jsonwebtoken';

const adminAuth = async (req, res, next) => {
    try {
        const {token} = req.headers;

        if(!token){
            return res.status(401).json({success: false, message: "Unauthorized access. Please login again."});
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if(decodedToken !== process.env.ADMIN_EMAIL + process.env.ADMIN_PASSWORD){
            return res.status(401).json({success: false, message: "Unauthorized access. Please login again."});
        }

        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({success: false, message: "Internal server error", error: error.message,  });
    }
}

export default adminAuth;