var aplikasiAkademik = angular.module('aplikasiAkademik', ['angular-growl']);
aplikasiAkademik.config(['growlProvider',function(growlProvider){
        growlProvider.globalTimeToLive(5000);
}]);

//looping 
aplikasiAkademik.controller('EmailController', function ($scope,growl) {
    $scope.daftarEmail = [
        'agung@gmail.com',
        'agungpermadi@yahoo.com'
    ];

    $scope.tambahEmail = function () {
        if($scope.email){
             $scope.daftarEmail.push($scope.email);
             $scope.email = '';
             growl.addSuccessMessage("Data Berhasil Ditambahkan!",{ttl:2000});
        }else{
            growl.addWarnMessage("Data Tidak Lengkap !!",{ttl:2000});
        }
       
    };

    $scope.hapusEmail = function (x) {
        //cari indexnya dahulu didalam array
        var lokasiIndex = $scope.daftarEmail.indexOf(x);
        //jika -1 
        if (lokasiIndex > -1) {
            //hapus data dalam array berdasarkan index
            $scope.daftarEmail.splice(lokasiIndex, 1);
            growl.addWarnMessage("Data Berhasil Dihapus !!",{ttl:2000});
        }
    };

});