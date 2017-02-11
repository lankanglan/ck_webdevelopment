 
app.controller('ContactController', function ($scope, $http, $timeout) {
    $scope.result = 'hidden';
    $scope.resultMessage = 'message';
    $scope.formData; //formData is an object holding the name, email, subject, and message
    $scope.submitButtonDisabled = false;
    $scope.submitted = false; //used so that form errors are shown only after the form has been submitted
    $scope.submit = function() {
        $scope.submitted = true;
        $scope.submitButtonDisabled = true;
      
        if ($scope.contactform.$valid) {
            $http({
                method  : 'POST',
                url     : 'contact-form.php',
                data    : $.param($scope.formData),  //param method from jQuery
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  //set the headers so angular passing info as form data (not request payload)
            }).then(function(result){
                console.log(result);
                $scope.showMsg = true;
                if (result.then) { //success comes from the return json object
                    $scope.submitButtonDisabled = true;
                    $scope.resultMessage = result.message;
                    $scope.result='bg-success';
                } else {
                    $scope.submitButtonDisabled = false;
                    $scope.resultMessage = result.message;
                    $scope.result='bg-danger';
                }
                $scope.contactform.$setPristine();
                $scope.submitButtonDisabled = false;
                
                
               
               /* $scope.reset($scope.formData);
                $scope.contactform.$untouched();
                $scope.contactform.$setValidity();
                $scope.contactform.$dirty = false;
                $scope.contactform.$error = {};
                $scope.contactform.$submitted = true;
                $scope.contactform.$invalid = false;
                $scope.contactform.$valid = true;*/
                
                $scope.reset = function(){
                	
                }
              
                $timeout(function () {
                	
                    $scope.showMsg = false;
                   
                  }, 3000);
            });
        } else {
            $scope.submitButtonDisabled = false;
            $scope.resultMessage = 'Failed :( Please fill out all the fields.）';
            $scope.result='bg-danger';
        }
    }
    $scope.reset = function(formData) {
        if (formData) {
            formData.inputName = null;
            formData.inputEmail = null;
            formData.inputPhone = null;
            formData.inputCompany = '';
            formData.inputMessage = '';
        }
    }
});
 
