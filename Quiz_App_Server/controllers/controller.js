import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";


// /** get all questions */
export async function getAllQuestionSets(req, res) {
  try {
    const q = await Questions.find();
    console.log(q);
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}

/** insert all questinos */
export async function insertQuestionSet(req, res) {
  const questions = new Questions({
    language: req.body.language,
    questionSet: req.body.questionSet,
    answerSet: req.body.answerSet,
  });
  return questions
    .save()
    .then((newQuestions) => {
      return res.status(201).json({
        success: true,
        message: "New cause created successfully",
        Questions: newQuestions,
      });
    })
    .catch((error) => {
      res.status(500).json({
        success: false,
        message: "Server error. Please try again.",
        error: error.message,
      });
    });
}

// /** Delete all Questions */
export async function dropAllQuestionSets(req, res) {
  try {
    await Questions.deleteMany();
    res.json({ msg: "Questions Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
export async function getQuestionSet(req, res) {
  try {
    const q = await Questions.findOne({ language: req.params.lang });
    console.log(q);
    res.json(q);
  } catch (error) {
    res.json({ error });
  }
}
export async function dropQuestionSet(req, res) {
  try {
    const q = await Questions.deleteOne({ language: req.params.lang });
    res.json(`Deleted all questions of ${req.params.lang} language`);
  } catch (error) {
    res.json({ error });
  }
}


/** get all result */
export async function getResult(req, res) {
  try {
    const r = await Results.find();
    res.json(r);
  } catch (error) {
    res.json({ error });
  }
}

/** post all result */
export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achived } = req.body;
    if (!username && !result) throw new Error("Data Not Provided...!");

    Results.create(
      { username, result, attempts, points, achived },
      function (err, data) {
        res.json({ msg: "Result Saved Successfully...!" });
      }
    );
  } catch (error) {
    res.json({ error });
  }
}

/** delete all result */
export async function dropResult(req, res) {
  try {
    await Results.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    res.json({ error });
  }
}
