const GroupRepository = require("../repository/group-repository");
const groupRepository = new GroupRepository();
const getGroupByName = async (req, res) => {
  try {
    const response = await groupRepository.getGroupByName(req.params.name);
    res.status(201).json({
          success: true,
          data: response,
          err: {},
         message: "group name found successfully",
    });
  } catch (error) {
    res.status(500).json({
          success: false,
          data: {},
          err: error,
         message: "cannot find group name",
    });
  }
};
const createGroup = async (req, res) => {
  try {
    const { name, color } = await req.body;
    if (!name || !color) {
      return res.status(400).json({
        success: false,
        data: {},
        err: {},
        message: "All input is required"
      });
    }
    const response = await groupRepository.createGroup(req.body);
    console.log(response)
    res.status(201).json({
          success: true,
          data: response,
          err: {},
         message: "group created successfully",
    });
  } catch (error) {
      res.status(500).json({
        success: false,
        data: {},
        err: error,
        message: "cannot create group ",
      });
  }
};
 const getAllGroups = async (req, res) => {
  try {
    const groups = await groupRepository.getAllGroups();
    res.status(200).json({
      success: true,
      data: groups,
      err: {},
      message: "groups found successfully",
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Server Error"
    });
  }
};

const getGroupsWithAllNotes = async (req, res) => {
  try {
    const groups = await groupRepository.getGroupsWithAllNotes(req.params.id);
    //console.log(groups)
    res.status(200).json({
      success: true,
      data: groups,
      err: {},
      message: "groups found successfully",

    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: {},
      err: error,
      message: "Server Error"
    })
  }
  
}

module.exports = { getGroupByName, createGroup,getAllGroups,getGroupsWithAllNotes };
