package com.ssafy.nolmung.user.dto.response;

import com.ssafy.nolmung.user.domain.User;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;

@Data
@RequiredArgsConstructor
public class UserResponseDto {

    private int userId;
    private int regionId;
    private String userIntroduction;
    private double userLat;
    private double userLot;
    private String userAddressText;
    private String userCode;
    private int userScore;
    private LocalDateTime userUpdateDate;
    private String userImg;
    private String userEmail;

    public UserResponseDto(User user){
        this.userId = user.getUserId();
//        this.regionId = user.getRegion().getRegionId();
        this.userLat = user.getUserLat();
        this.userLot = user.getUserLot();
        this.userAddressText = user.getUserAddressText();
//        this.userIntroduction = user.getUserIntroduction();
        this.userCode = user.getUserCode();
        this.userScore = user.getUserScore();
        this.userUpdateDate = user.getUserUpdateDate();
        this.userImg = user.getUserImg();
        this.userEmail = user.getUserEmail();
    }
}