<?php


namespace App\Component;


class FirstImage
{
    public static function img($string)
    {
        try {
            $arr = explode(',', $string);
            return 'img/upload/' . $arr[0];
        } catch (\Exception $exception) {
            return '';
        }
        return '';
    }
}
