<?php


namespace App\Component;


class ArrImg
{
    public static function img($string)
    {
        try {
            $arr = explode(',', $string);
            return $arr;
        } catch (\Exception $exception) {
            return '';
        }
        return '';
    }
}
