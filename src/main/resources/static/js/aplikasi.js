var aplikasiAkademik = angular.module('aplikasiAkademik', []);

//model request/response 1
/***/
aplikasiAkademik.controller('MahasiswaRestController', function ($http, $scope) {
    $scope.dataMahasiswa = {};

    $scope.hapusMahasiswa = function (m) {
        $http.delete('/api/mahasiswa/' + m.id).then(sukses, gagal);
        function sukses(response) {
            //refresh kembali data
            $scope.tampilkanData();
            alert('data berhasil dihapus !!');
        }
        function gagal(response) {
            console.log(response);
            alert('Error : ' + response);
        }
        ;
    };

    $scope.tampilkanData = function () {
        $http.get("/api/mahasiswa").then(sukses, gagal);

        function sukses(response) {
            //alert('sukses');
            $scope.dataMahasiswa = response.data;
            console.log($scope.dataMahasiswa);
        }
        ;

        function gagal(response) {
            console.log(response);
            alert('Gagal Menampilkan Data !!' + response);
        }
        ;
    };

    $scope.tampilkanData();

    $scope.tambahMahasiswa = function () {
        var promise;

        if ($scope.mahasiswa.id) {
            promise = $http.put('/api/mahasiswa/' + $scope.mahasiswa.id, $scope.mahasiswa);

        }
        else {
            promise = $http.post('/api/mahasiswa', $scope.mahasiswa);
        }
        
        $scope.clearForm();
        
        promise.then(
                function sukses(response) {
                    
                    $scope.tampilkanData();
                    alert("Data berhasil Disimpan ");
                },
                
                function gagal(response) {
                    console.log(response);
                    alert('Gagal Menampilkan Data !!' + response);
                }
        );
    };
    
    $scope.editMahasiswa = function(m){
        $scope.mahasiswa = m;
    };
    
    $scope.clearForm = function(){
        $scope.mahasiswa = {};
    };
});

aplikasiAkademik.controller('MataKuliahRestController', function($http,$scope){
    $scope.dataMatkul = {};
    $scope.dataDosen = {};
    
    $scope.loadDataDosen = function(){
        $http.get('/api/all/dosen').then(sukses,gagal);
        
        function sukses(response) {
            //alert('sukses');
            $scope.dataDosen = response.data;
            console.log($scope.dataDosen);
        };

        function gagal(response) {
            console.log(response);
            alert('Gagal Menampilkan Data !!' + response);
        };
        
    };
    
    $scope.loadDataDosen();

    $scope.tampilkanData = function () {
        $http.get("/api/matkul").then(sukses, gagal);

        function sukses(response) {
            //alert('sukses');
            $scope.dataMatkul = response.data;
            console.log($scope.dataMatkul);
        };

        function gagal(response) {
            console.log(response);
            alert('Gagal Menampilkan Data !!' + response);
        };
    };
    
    $scope.tampilkanData();
    
    $scope.tambahMatkul = function(d){
        var promise;
        if ($scope.matkul.id) {
            promise = $http.put('/api/matkul/' + $scope.matkul.id, $scope.matkul);

        }
        else {
            promise = $http.post('/api/matkul', $scope.matkul);
        }
        
        $scope.clearForm();
        
        promise.then(
                function sukses(response) {
                    
                    $scope.tampilkanData();
                },
                
                function gagal(response) {
                    console.log(response);
                    alert('Gagal Menampilkan Data !!' + response);
                }
        );
    };
    
    $scope.hapusMatkul = function(m){
        $http.delete('/api/matkul/' + m.id).then(sukses, gagal);
        
        function sukses(response) {
            //refresh kembali data
            $scope.tampilkanData();
            alert('data berhasil dihapus !!');
        }
        function gagal(response) {
            console.log(response);
            alert('Error : ' + response);
        }
        ;
    };
    
    $scope.editMatkul = function(m){
        $scope.matkul = m;
    };
    
    $scope.clearForm = function(){
        $scope.dataMatkul = {};
    };
});

aplikasiAkademik.controller('CourseController',function($http,$scope){
    $scope.dataCourse = {};
    
    $scope.tampilkanDataCourse = function(){
        $http.get('/api/course').then(sukses, gagal);
        
        function sukses(response){
            $scope.dataCourse = response.data;
            alert('data berhasil ditampilkan');
        }
                function gagal(response){
                    alert('data gagal ditampilkan');
                    console.log(response);
                };        
    };
    
    $scope.tampilkanDataCourse();
    
});

//model request/response 2
/**
 aplikasiAkademik.controller('MahasiswaRestController',['$scope','$http', function($scope,$http) {
 
 $scope.viewDataMahasiswa = function(){
 var promise = $http.get('/api/mahasiswa');
 promise.then(
 
 function(responseSukses){
 $scope.dataMahasiswa = responseSukses.data;
 },
 
 function(responseGagal){
 alert('Gagal Menampilkan data ' + responseGagal.status);
 }    
 );
 };
 //saat di loading langsung tampilkan data   
 $scope.viewDataMahasiswa();   
 
 $scope.hapusMahasiswa = function(m){
 var promise = $http.delete('/api/mahasiswa/' + m.id);
 promise.then(
 function(responseSukses){
 $scope.viewDataMahasiswa();
 },
 
 function(responseGagal){
 alert('Gagal Menghapus data ' + responseGagal.status + m.id);
 }    
 );
 }; 
 /**
 $scope.tambahMahasiswa = function(){
 var promise;
 
 if($scope.mahasiswa.id){
 promise = $http.put('/api/mahasiswa/ '+$scope.mahasiswa.id);
 
 }
 else{
 promise = $http.post('/api/mahasiswa', $scope.mahasiswa);
 }
 
 $scope.clearForm();
 
 promise.then(
 function(responseSukses){
 $scope.viewDataMahasiswa();
 },
 function(responseGagal){
 alert('Gagal Menghapus data ' + responseGagal.status + mahasiswa.id);
 }    
 );
 };
 
 
 
 
 $cope.clearForm = function(){
 $scope.mahasiswa = {};  
 };
 }]);*/
