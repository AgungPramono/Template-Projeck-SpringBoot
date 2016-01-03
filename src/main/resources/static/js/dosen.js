var aplikasiAkademik = angular.module('aplikasiAkademik', []);

aplikasiAkademik.controller('DosenRestController', ['$scope', '$http', function ($scope, $http) {

        $scope.viewDataDosen = function () {
            var promise = $http.get('/api/dosen');
            promise.then(
                    function (responseSukses) {
                        $scope.dataDosen = responseSukses.data;
                        console.log(responseSukses);
                    },
                    function (responseGagal) {
                        alert('Gagal Menampilkan data ' + responseGagal.status);
                    }
            );
        };
        //saat loading langsung tampilkan
        $scope.viewDataDosen();

        $scope.hapusData = function (d) {
            var promise = $http.delete('/api/dosen/' + d.id);
            promise.then(
                    function (succes) {
                        $scope.viewDataDosen();
                    },
                    function (gagal) {
                        aler('gagal menghapus data ' + gagal.status);
                    }
            );
        };

        $scope.simpanData = function () {
            var promise;

            if ($scope.dosen.id) {
                //$scope.clearForm();
                promise = $http.put('/api/dosen/' + $scope.dosen.id, $scope.dosen);
            }
            else {
                promise = $http.post('/api/dosen' , $scope.dosen);
            }

            promise.then(
                    function sukses(response) {

                        $scope.viewDataDosen();
                    },
                    function gagal(response) {
                        console.log(response);
                        alert('Gagal Menampilkan Data !!' + response);
                    }
            );
        };
        
        $scope.editDosen = function(d){
            $scope.dosen = d;
        };
        
        $scope.clearForm = function(){
            $scope.dosen = {};
        };
    }]);