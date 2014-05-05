//TODO: trocar o nome de course por program_item

// cria classes de controle
// button-up, button-down, button-info

function drawProgram(program, $container)
{
  var programItems = program.program_items;
  var lastProgramItem = programItems[programItems.length - 1];

  numberOfColumns = lastProgramItem.column + 1;

  createCoursesContainers(numberOfColumns, $container);
  createCourses(program.program_items);

  debug(numberOfColumns);
};

function createCoursesContainers(numberOfPeriods, $container) {
  var i = 0;
  var coursesContainer;
  $container.html('');
  for (i = 0; i < numberOfPeriods; i++) {
    var period = i + 1;
    coursesContainer = '<div class="courses-container" id="courses-container-' + i +'"><div class="period-container">'+period+'</div></div>';
    $container.append(coursesContainer);
  }
};

function createCourses(courses) {

  var course;
  var i = 0;
  var courseElement;
  for (i = 0; i < courses.length; i++) {
    course = courses[i];
    courseElement = createCourseElement(course, i);
    insertCourseElement(courseElement, course);
  }

};

function insertCourseElement(courseElement, course) {
  var courseContainerId = '#courses-container-' + course.column;
  var courseContainer = $(courseContainerId);
  courseContainer.append(courseElement);

};

function createCourseElement(course, index) {
  var courseElement = '<div class="course-element" id="'+generateElementId('course', index)+'">'+insideOfCourseElement(course)+'</div>'
  return courseElement;
};

function generateElementId(elementName, index) {
  return elementName + '-' + index;
};

function insideOfCourseElement(course) {
  var r = '<div class="course-element-content">'+
  course.course.name+'<div class="course-element-code">'+course.course.code+'</div></div><div class="course-element-control">'+insideOfCourseControl(course)+'</div>'
  return r;
};

function insideOfCourseControl(course) {
  if (course.course.code === 'OPT' || course.course.code === 'TGI' || course.course.code === 'TGII') {
    var r = '<div class="button-up" course_id="'+course.id+'"></div><div class="button-down" course_id="'+course.id+'"></div>';
  } else {
    var r = '<div class="button-up" course_id="'+course.id+'"></div><div class="button-down" course_id="'+course.id+'"></div><a href="/courses/'+course.course.id+'/enrollments" class="button-info" course_id="'+ course.id +'"></a>';
  }

  return r;
}

function debug(object)
{
  var JSONtext = JSON.stringify(object, null, 2);
  console.log(JSONtext);
}